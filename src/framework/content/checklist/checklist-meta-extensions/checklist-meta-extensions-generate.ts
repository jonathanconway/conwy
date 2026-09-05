import { load as cheerioLoad } from "cheerio";
import { trim, uniq } from "lodash";
import { MarkedToken, Token, Tokens, lexer, marked, parser } from "marked";
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
  ChecklistItemTag,
  ChecklistItemTagGroup,
  ChecklistMetaExtensions,
} from "./checklist-meta-extensions";

function checkIsMarkedTokenType<T extends MarkedToken>(
  type: MarkedToken["type"],
) {
  return (token: Token): token is T => {
    return token.type === type;
  };
}

export async function generateChecklistMetaExtensions(
  checklistMeta: ChecklistMeta,
  checklistMd: string,
): Promise<ChecklistMetaExtensions | undefined> {
  const checklistMdHtml = await marked(checklistMd);
  const checklistMdTokens = lexer(checklistMd);

  const checklistHeadingsMdByName = Object.fromEntries(
    checklistMdTokens
      .filter(checkIsMarkedTokenType<Tokens.Heading>("heading"))
      .map((checklistMdTokenHeading) => [
        generateChecklistItemKey(
          checklistMdTokenHeading.text
            .split("[^")[0]
            .trim()
            .replace(" - ", " ")
            .trim(),
        ),
        checklistMdTokenHeading.raw,
      ]),
  );

  const checklistItemsMdByName = Object.fromEntries(
    checklistMdTokens
      .filter(checkIsMarkedTokenType<Tokens.List>("list"))
      .flatMap((checklistMdTokenList) => checklistMdTokenList.items)
      .map((checklistMdTokenListItem) => [
        generateChecklistItemKey(
          checklistMdTokenListItem.text.split("<br />")[0],
        ),
        checklistMdTokenListItem.raw,
      ]),
  );

  const checklistMd$ = cheerioLoad(checklistMdHtml);

  const childrenEls = checklistMd$("body").children();

  const items: ChecklistItem[] = [];

  let itemsByHeadingText: Tree<string, ChecklistItem> = {
    branch: "",
    children: [],
    subBranches: [],
  };
  const lastHeadingTexts: string[] = [];
  let lastHeadingName = "";

  const notesByHeadingText: Record<string, string> = {};

  for (const childEl of childrenEls) {
    const $childEl = checklistMd$(childEl);
    const childElMd = $childEl.text().trim();

    switch (childEl.tagName) {
      case "h2":
      case "h3":
      case "h4":
      case "h5": {
        const lastHeadingText = childElMd.split("[^")[0].trim();
        const lastHeadingLevel = parseInt(childEl.tagName.split("h")[1]);

        lastHeadingName = generateChecklistItemKey(
          childElMd.split("[^")[0].trim().replaceAll(" - ", " ").trim(),
        );

        lastHeadingTexts.length = lastHeadingLevel - 2;
        lastHeadingTexts.push(lastHeadingText);

        itemsByHeadingText = addTreeSubBranchPath(
          itemsByHeadingText,
          lastHeadingTexts,
        );

        break;
      }

      case "p": {
        if (childElMd.startsWith("[^")) {
          notesByHeadingText[lastHeadingName] = childElMd;
        }
        break;
      }

      case "ul": {
        const $checkListItemEls = $childEl.children("li");
        const checkListItemsHtml = $checkListItemEls
          .map((_, el) => checklistMd$(el).html())
          .toArray();
        const checklistItems = checkListItemsHtml.map((checkListItemHtml) =>
          parseChecklistItem(
            checklistItemsMdByName,
            lastHeadingName,
            checkListItemHtml,
          ),
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

  const sectionsByHeadingText = Object.fromEntries(
    Object.entries(checklistHeadingsMdByName).map(
      ([checklistSectionName, checklistSectionContentMd]) => [
        checklistSectionName,
        {
          contentMd: checklistSectionContentMd,
          noteMd: notesByHeadingText[checklistSectionName],
        },
      ],
    ),
  );

  const checklistMetaExtension: ChecklistMetaExtensions = {
    items,
    itemsByName,
    tagGroups,
    itemsByHeadingText,
    sectionsByHeadingText,
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

function parseChecklistItem(
  checklistItemsMdByName: Record<string, string>,
  sectionName: string,
  checklistItemHtml: string,
) {
  const $ = cheerioLoad(checklistItemHtml);

  let title = "";
  let foundBr = false;

  $("body")
    .contents()
    .each((_, node) => {
      if (node.type === "tag" && node.name === "br") {
        foundBr = true;
        return;
      }
      if (!foundBr) {
        title += $(node).text();
      }
    });

  title = title.trim();
  const name = generateChecklistItemKey(title);
  const contentMd = checklistItemsMdByName[name];
  const checklistItemText = $.text().trim();
  const tags = parseChecklistItemTags(checklistItemText);

  const item: ChecklistItem = {
    name,
    title,
    contentMd,
    tags,
    links: [],
    sectionName,
  };
  return item;
}

function produceChecklistTagGroups(
  items: readonly ChecklistItem[],
  tagTitles: Record<string, string>,
  tagGroupTitles: Record<string, string>,
) {
  const tagGroupsByName: Record<string, ChecklistItemTagGroup> = {};

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

  const checklistItemTags: ChecklistItemTag[] = checklistItemTagNames.map(
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
