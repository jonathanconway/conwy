import { CheerioAPI, load as cheerioLoad } from "cheerio";
import { lstatSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { chunk, fromPairs, kebabCase, trim, uniq } from "lodash";
import { marked } from "marked";

import {
  ChecklistItem,
  ChecklistMeta,
  ChecklistTag,
  ChecklistTagGroup,
  Tree,
  addTreeSubBranch,
  addTreeSubBranchChildren,
  addTreeSubBranchPath,
  isNotNil,
  mkDirSyncIfNotExists,
  sentenceCase,
} from "@/framework";

export async function buildChecklists(
  checklistMetas?: readonly ChecklistMeta[],
) {
  const checklistMetasToBuild =
    checklistMetas ?? (await getChecklistMetas(getChecklistFolders()));
  for (const checklistMeta of checklistMetasToBuild) {
    buildChecklistMetaExtensionJson(checklistMeta);
    buildChecklistDownloadMd(checklistMeta);
  }
}

async function buildChecklistDownloadMd(checklistMeta: ChecklistMeta) {
  const { slug } = checklistMeta;
  const checklistMdFilePathName = `${process.cwd()}/src/content/checklists/${slug}/content.mdx`;
  const checklistMd = readFileSync(checklistMdFilePathName).toString();

  const checklistDownloadMdFilePath = `${process.cwd()}/public/downloads/checklists/${slug}`;
  mkDirSyncIfNotExists(checklistDownloadMdFilePath);

  const checklistDownloadMdFilePathName = `${checklistDownloadMdFilePath}/${slug}.md`;
  const checklistMdBody = checklistMd.split("-----")[1];
  writeFileSync(checklistDownloadMdFilePathName, checklistMdBody);
}

async function getChecklistMd(slug: string) {
  const checklistMdFilePathName = `${process.cwd()}/src/content/checklists/${slug}/content.mdx`;
  const checklistMd = readFileSync(checklistMdFilePathName).toString();

  return checklistMd;
}

function getChecklistFolders() {
  const checklistsPath = `${process.cwd()}/src/content/checklists`;
  const checklistDir = readdirSync(checklistsPath);
  const checklistFolders = checklistDir.filter((checklistDirItem) =>
    lstatSync(`${checklistsPath}/${checklistDirItem}`).isDirectory(),
  );
  return checklistFolders;
}

async function getChecklistMetas(
  checklistFolders: readonly string[],
): Promise<readonly ChecklistMeta[]> {
  return await Promise.all(
    checklistFolders.map(
      async (checklistFolder) =>
        (
          await import(
            `${process.cwd()}/src/content/checklists/${checklistFolder}/meta`
          )
        ).meta,
    ),
  );
}

function parseChecklistItemTag(checklistItemTagName: string) {
  const checklistItemTagNameParts = checklistItemTagName.split("--");
  if (checklistItemTagNameParts.length === 1) {
    return {
      tagGroupName: "general",
      name: checklistItemTagNameParts[0],
      title: sentenceCase(checklistItemTagNameParts[0]),
    };
  } else {
    return {
      tagGroupName: checklistItemTagNameParts[0],
      name: checklistItemTagNameParts[1],
      title: sentenceCase(checklistItemTagNameParts[1]),
    };
  }
}

function parseChecklistItemTags(checklistItemText: string) {
  const checklistItemTagNames = checklistItemText
    .split(" ")
    .map(trim)
    .filter(isNotNil)
    .filter((part) => part.startsWith("#"))
    .map((part) => part.replace("#", ""));
  const checklistItemTags: ChecklistTag[] = checklistItemTagNames.map(
    parseChecklistItemTag,
  );
  return checklistItemTags;
}

function parseChecklistItem(checklistItemHtml: string) {
  const $ = cheerioLoad(checklistItemHtml);
  const checklistItemText = $.text().trim();
  const name = checklistItemText
    .split(" ")
    .slice(0, 3)
    .filter((name) => !name.startsWith("#"))
    .join("-")
    .toLowerCase();
  const tags = parseChecklistItemTags(checklistItemText);
  const item: ChecklistItem = {
    name,
    tags,
    links: [],
  };
  return item;
}

function produceChecklistTagGroups(
  items: readonly ChecklistItem[],
  tagTitles: Record<string, string>,
) {
  const tagGroupsByName: Record<string, ChecklistTagGroup> = {};
  for (const item of items) {
    for (const tag of item.tags) {
      tagGroupsByName[tag.tagGroupName] = tagGroupsByName[tag.tagGroupName] ?? {
        name: tag.tagGroupName,
        title: tagTitles[tag.tagGroupName] ?? sentenceCase(tag.tagGroupName),
        tags: [],
      };
      const tagsByName = Object.fromEntries(
        [...tagGroupsByName[tag.tagGroupName].tags, tag].map((tag) => [
          tag.name,
          tag,
        ]),
      );
      const tagNamesUniq = uniq(Object.keys(tagsByName));
      const tagsUniq = tagNamesUniq.map((tagName) => tagsByName[tagName]);
      const tagsUniqTitled = tagsUniq.map((tag) => ({
        ...tag,
        title: tagTitles[tag.name] ?? sentenceCase(tag.title),
      }));

      tagGroupsByName[tag.tagGroupName] = {
        ...tagGroupsByName[tag.tagGroupName],
        tags: tagsUniqTitled,
      };
    }
  }
  return Object.values(tagGroupsByName);
}

function produceTagTitles(checklistMd$: CheerioAPI): Record<string, string> {
  const $tagTitlesAsideEl = checklistMd$(
    'aside[data-mdx-custom="checklist-tag-titles"]',
  );
  const $tagTitlesDefinitionEls = $tagTitlesAsideEl.find("dt, dd");
  const tagTitlesDefinitionElTexts = $tagTitlesDefinitionEls
    .map((_, $el) => checklistMd$($el).text())
    .toArray();
  const tagTitlesDefinitionElTextsChunked = chunk(
    tagTitlesDefinitionElTexts,
    2,
  );
  const tagTitlesDefinitionPairs = fromPairs(tagTitlesDefinitionElTextsChunked);
  return tagTitlesDefinitionPairs;
}

async function buildChecklistMetaExtensionJson(checklistMeta: ChecklistMeta) {
  const checklistMd = await getChecklistMd(checklistMeta.slug);
  if (!checklistMd) {
    return;
  }

  const { title, blurb } = checklistMeta;
  const checklistMdHtml = await marked(checklistMd);
  const checklistMd$ = cheerioLoad(checklistMdHtml);

  const childrenEls = checklistMd$("body").children();

  const items: ChecklistItem[] = [];

  let itemsByHeadingText: Tree<string, ChecklistItem> = {
    branch: "",
    children: [],
    subBranches: [],
  };
  const lastHeadingTexts: string[] = [];

  for (const childEl of childrenEls) {
    const $childEl = checklistMd$(childEl);
    switch (childEl.tagName) {
      case "h2":
      case "h3":
      case "h4":
      case "h5": {
        const lastHeadingText = $childEl.text().split("[^")[0].trim();

        const lastHeadingLevel = parseInt(childEl.tagName.split("h")[1]);

        lastHeadingTexts.length = lastHeadingLevel - 2;

        lastHeadingTexts.push(lastHeadingText);

        itemsByHeadingText = addTreeSubBranchPath(
          itemsByHeadingText,
          lastHeadingTexts,
        );

        break;
      }

      case "ul": {
        const $checkListItemEls = $childEl.children("li");
        const checkListItemsHtml = $checkListItemEls
          .map((_, el) => checklistMd$(el).html())
          .toArray();
        const checklistItems = checkListItemsHtml.map((checkListItemHtml) =>
          parseChecklistItem(checkListItemHtml),
        );

        items.push(...checklistItems);

        itemsByHeadingText = addTreeSubBranchChildren(
          itemsByHeadingText,
          lastHeadingTexts,
          checklistItems,
        );

        lastHeadingTexts.pop();

        break;
      }
    }
  }

  const tagTitles = produceTagTitles(checklistMd$);
  const tagGroups = produceChecklistTagGroups(items, tagTitles);

  const slug = kebabCase(title);

  const checklistMetaExtension: ChecklistMeta = {
    title,
    blurb,
    slug,
    items,
    tagGroups,
    itemsByHeadingText,
  };

  const generatedPath = `${process.cwd()}/.generated`;
  const contentPath = `${generatedPath}/content`;
  const checklistsPath = `${contentPath}/checklists`;
  const checklistPath = `${checklistsPath}/${slug}`;
  const checklistMetaExtensionPath = `${checklistPath}/checklist-meta.json`;

  mkDirSyncIfNotExists(checklistsPath);
  mkDirSyncIfNotExists(checklistPath);
  writeFileSync(
    checklistMetaExtensionPath,
    JSON.stringify(checklistMetaExtension, null, 2),
  );
}
