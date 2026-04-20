import { isArray, isString, kebabCase, trim } from "lodash";
import { ReactNode } from "react";

import {
  Maybe,
  hasProps,
  isNotNil,
  isReactElementOfType,
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
      hasProps(children[0]) &&
      children[0].props &&
      "type" in children[0].props &&
      children[0].props.type === "checkbox"
    )
  ) {
    return false;
  }

  return true;
}

export function selectChecklistItemProps(children: ReactNode[]) {
  const ulLiElementChildren = children as ReactNode[];

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

  const tags = selectTags(ulLiElementChildrenWithoutInput).filter(isNotNil);

  const item: ChecklistPropsSectionItem = {
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

export function selectTags(input: readonly ReactNode[]) {
  return input
    .filter(isString)
    .map(trim)
    .filter(isNotNil)
    .flatMap((part) => part.split(" ").map(trim).filter(isNotNil))
    .filter((part) => part.startsWith("#"))
    .filter(isNotNil)
    .map(convertTagStringToTag);
}

export function convertTagStringToTag(
  tagString: string,
): ChecklistPropsSectionItemTag {
  tagString = tagString.replace("#", "");
  if (tagString.includes("--")) {
    const [group, tag] = tagString.split("--");
    return {
      group,
      tag,
    };
  }
  return {
    group: "general",
    tag: tagString,
  };
}

function convertSectionTitleToTag(
  sectionTitle?: Maybe<ReactNode>,
): Maybe<ChecklistPropsSectionItemTag> {
  if (!sectionTitle || !isString(sectionTitle)) {
    return;
  }

  const group = "section";
  const tag = kebabCase(sectionTitle);

  return {
    group,
    tag,
  };
}
