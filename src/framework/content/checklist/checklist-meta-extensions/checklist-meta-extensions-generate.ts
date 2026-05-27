import { load as cheerioLoad } from "cheerio";
import { trim, uniq } from "lodash";
import { marked } from "marked";

import {
  REGEXP_WHITESPACE,
  Tree,
  addTreeSubBranchChildren,
  addTreeSubBranchPath,
  isNotNil,
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

        lastHeadingTexts.pop();

        break;
      }
    }
  }

  const { tagTitles, tagGroupTitles } = checklistMeta;
  const tagGroups = produceChecklistTagGroups(items, tagTitles, tagGroupTitles);

  const checklistMetaExtension: ChecklistMetaExtensions = {
    items: [],
    tagGroups,
    itemsByHeadingText,
  };

  return checklistMetaExtension;
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
  tagGroupTitles: Record<string, string>,
) {
  const tagGroupsByName: Record<string, ChecklistTagGroup> = {};
  for (const item of items) {
    for (const tag of item.tags) {
      tagGroupsByName[tag.tagGroupName] = tagGroupsByName[tag.tagGroupName] ?? {
        name:
          tagGroupTitles[tag.tagGroupName] ?? sentenceCase(tag.tagGroupName),
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
