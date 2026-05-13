import { isArray, isString } from "lodash";

import {
  getTreeSubBranchByBranch,
  getTreeSubBranchDescendantsCount,
} from "@/framework/client";

import { ChecklistSectionHeading } from "../../../../../checklist";
import {
  MdxDivCustomChecklistContextValue,
  useMdxDivCustomChecklistContext,
} from "../mdx-div-custom-checklist-context";

import { MdxDivCustomChecklistHeadingProps } from "./mdx-div-custom-checklist-heading-props";

function createChecklistSectionHeadingProps(
  props: MdxDivCustomChecklistHeadingProps,
  mdxDivCustomChecklistContext?: MdxDivCustomChecklistContextValue,
) {
  if (!mdxDivCustomChecklistContext?.checklistMeta?.extensions) {
    return;
  }

  const headingText = (() => {
    if (!props.children) {
      return;
    }

    if (isString(props.children)) {
      return props.children.trim();
    }

    if (isArray(props.children)) {
      return String(props.children[0]).trim();
    }
  })();

  if (!headingText) {
    return;
  }

  const sectionDetails = getTreeSubBranchByBranch(
    mdxDivCustomChecklistContext.checklistMeta.extensions.itemsByHeadingText,
    headingText,
  );

  const itemsCount = sectionDetails
    ? getTreeSubBranchDescendantsCount(sectionDetails)
    : 0;

  return {
    ...props,
    itemsCount,
    headingText,
  };
}

export function MdxDivCustomChecklistHeading(
  props: MdxDivCustomChecklistHeadingProps,
) {
  const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();

  const checklistSectionHeadingProps = createChecklistSectionHeadingProps(
    props,
    mdxDivCustomChecklistContext,
  );

  if (checklistSectionHeadingProps) {
    return <ChecklistSectionHeading {...checklistSectionHeadingProps} />;
  }
}
