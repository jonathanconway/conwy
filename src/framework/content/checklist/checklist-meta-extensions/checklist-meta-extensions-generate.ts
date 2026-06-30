import { load as cheerioLoad } from "cheerio";
import { trim, uniq } from "lodash";
import { marked } from "marked";
import { ReactNode } from "react";

import {
  REGEXP_WHITESPACE,
  Tree,
  addTreeSubBranchChildren,
  addTreeSubBranchPath,
  convertReactNodeToString,
  isNotNil,
  removeNonAlphaNumeric,
  sentenceCase,
} from "../../../utils";
import { ChecklistMeta } from "../checklist-meta";

import {
  ChecklistItem,
  ChecklistMetaExtensions,
  ChecklistTag,
  ChecklistTagGroup,
} from "./checklist-meta-extensions";

export async function generateChecklistMetaExtensions(
  checklistMeta: ChecklistMeta,
  checklistMd: string,
): Promise<ChecklistMetaExtensions | undefined> {
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

        break;
      }
    }
  }

  const { tagTitles, tagGroupTitles } = checklistMeta;
  const tagGroups = produceChecklistTagGroups(items, tagTitles, tagGroupTitles);

  const itemsByName = Object.fromEntries(
    items.map((item) => [item.name, item]),
  );

  const checklistMetaExtension: ChecklistMetaExtensions = {
    items,
    itemsByName,
    tagGroups,
    itemsByHeadingText,
  };

  return checklistMetaExtension;
}

export function generateChecklistItemKey(title: string | ReactNode) {
  const titleString = convertReactNodeToString(title);
  if (!titleString) {
    return "";
  }

  return titleString
    .trim()
    .split(/\s+/)
    .slice(0, 10)
    .map(removeNonAlphaNumeric)
    .filter((name) => !name.startsWith("#"))
    .join("-")
    .toLowerCase();
}

function parseChecklistItem(checklistItemHtml: string) {
  const $ = cheerioLoad(checklistItemHtml);

  let titleText = "";
  let foundBr = false;

  $("body")
    .contents()
    .each((_, node) => {
      if (node.type === "tag" && node.name === "br") {
        foundBr = true;
        return;
      }
      if (!foundBr) {
        titleText += $(node).text();
      }
    });

  titleText = titleText.trim();
  const name = generateChecklistItemKey(titleText);
  const checklistItemText = $.text().trim();
  const tags = parseChecklistItemTags(checklistItemText);

  const item: ChecklistItem = {
    name,
    title: titleText,
    tags,
    links: [],
  };
  return item;
}

function produceChecklistTagGroups(
  items: readonly ChecklistItem[],
  tagTitles: Record<string, string>,
  tagGroupTitles: Record<string, string>,
) {
  const tagGroupsByName: Record<string, ChecklistTagGroup> = {};

  for (const itemTag of items.flatMap((item) => item.tags)) {
    tagGroupsByName[itemTag.tagGroupName] = tagGroupsByName[
      itemTag.tagGroupName
    ] ?? {
      name: itemTag.tagGroupName,
      title:
        tagGroupTitles[itemTag.tagGroupName] ??
        sentenceCase(itemTag.tagGroupName),
      tags: [],
    };

    const tagsByName = Object.fromEntries(
      [...tagGroupsByName[itemTag.tagGroupName].tags, itemTag].map((tag) => [
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
    tagGroupsByName[itemTag.tagGroupName] = {
      ...tagGroupsByName[itemTag.tagGroupName],
      tags: tagsUniqTitled,
    };
  }
  return Object.values(tagGroupsByName);
}

function parseChecklistItemTags(checklistItemText: string) {
  const checklistItemTagNames = checklistItemText
    .split(REGEXP_WHITESPACE)
    .map(trim)
    .filter(isNotNil)
    .filter((part) => part.startsWith("#"))
    .map((part) => part.replace("#", ""));

  const checklistItemTags: ChecklistTag[] = checklistItemTagNames.map(
    parseChecklistItemTag,
  );
  return checklistItemTags;
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
