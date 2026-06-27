import { isArray, isObject, isString, kebabCase, trim } from "lodash";
import { ReactNode } from "react";

import {
  ChecklistMeta,
  ChecklistTag,
  ChecklistTagGroup,
  Maybe,
  generateChecklistItemKey,
  hasProps,
  isNotNil,
  isReactElementOfType,
  sentenceCase,
} from "@/framework/client";

import {
  ChecklistPropsSectionItem,
  ChecklistPropsSectionItemTag,
} from "../../../checklist";
import { MdxLiProps } from "../mdx-li-props";

export function checkIsChecklistItem(props: MdxLiProps) {
  const { children } = props;

  if (!isArray(children)) {
    return false;
  }

  if (children.length == 0) {
    return false;
  }

  if (
    !(
      // hasProps(children[0]) &&
      (
        isObject(children[0].props) &&
        // children[0].props &&
        "type" in children[0].props &&
        children[0].props.type === "checkbox"
      )
    )
  ) {
    return false;
  }

  return true;
}

export function selectChecklistItemProps(
  checklistMeta: ChecklistMeta,
  children: ReactNode[],
) {
  const ulLiElementChildren = children;
  const ulLiElementChildrenWithoutInput = ulLiElementChildren.slice(1);
  if (!ulLiElementChildrenWithoutInput.findIndex) {
    return;
  }

  const firstBrIndex = ulLiElementChildrenWithoutInput?.findIndex?.(
    (ulLiChild) => isReactElementOfType(ulLiChild, "br"),
  );
  const title = removeTags(
    ulLiElementChildrenWithoutInput?.slice?.(
      0,
      firstBrIndex > 0 ? firstBrIndex : ulLiElementChildrenWithoutInput.length,
    ),
  );

  const ulLiElementChildrenStringsAfterTitle =
    firstBrIndex > 0
      ? ulLiElementChildrenWithoutInput?.slice?.(firstBrIndex + 1)
      : [];

  const details = removeTags(ulLiElementChildrenStringsAfterTitle);

  const links: readonly ReactNode[] = [];

  const tags = selectTags(
    ulLiElementChildrenWithoutInput,
    checklistMeta,
  ).filter(isNotNil);

  const name = generateChecklistItemKey(title);

  const item: ChecklistPropsSectionItem = {
    name,
    title,
    details,
    tags,
    links,
  };

  return item;
}

export function removeTags(inputs: readonly ReactNode[]) {
  return inputs.filter((input: ReactNode): any => {
    if (isString(input) && input.includes("#")) {
      return false;
    }
    if (isArray(input)) {
      return removeTags(input as readonly ReactNode[]);
    }
    return true;
  }) as readonly ReactNode[];
}

export function selectTags(
  input: readonly ReactNode[],
  checklistMeta: ChecklistMeta,
) {
  return input
    .filter(isString)
    .map(trim)
    .filter(isNotNil)
    .flatMap((part) => part.split(" ").map(trim).filter(isNotNil))
    .filter((part) => part.startsWith("#"))
    .filter(isNotNil)
    .map(convertTagStringToTag(checklistMeta));
}

export function convertTagStringToTag(checklistMeta: ChecklistMeta) {
  return (tagString: string): Maybe<ChecklistPropsSectionItemTag> => {
    tagString = tagString.replace("#", "");
    if (tagString.includes("--")) {
      const [tagGroupName, tagName] = tagString.split("--");
      const tag: ChecklistTag = {
        name: tagName,
        title: checklistMeta.tagTitles[tagName] ?? sentenceCase(tagName),
        tagGroupName: tagGroupName,
      };
      const tagGroup: ChecklistTagGroup = {
        name: tagGroupName,
        title:
          checklistMeta.tagGroupTitles[tagGroupName] ??
          sentenceCase(tagGroupName),
        tags: [tag],
      };
      return {
        tagGroup,
        tag,
      };
    }
  };
}
