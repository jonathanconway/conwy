"use client";

import { isArray } from "lodash";

import {
  getTreeSubBranchByBranch,
  getTreeSubBranchDescendantsCount,
} from "@/framework/client";

import { ChecklistSectionHeading } from "../../../../../checklist";
import { Heading } from "../../../../../heading";
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

  if (!isArray(props.children)) {
    return;
  }

  const headingText = props.children?.[0].toString().trim();

  const sectionDetails = getTreeSubBranchByBranch(
    mdxDivCustomChecklistContext.checklistMeta.extensions.itemsByHeadingText,
    headingText,
  );

  if (
    !(
      sectionDetails &&
      (sectionDetails.children.length > 0 ||
        sectionDetails?.subBranches.length > 0)
    )
  ) {
    return;
  }

  const itemsCount = getTreeSubBranchDescendantsCount(sectionDetails);

  return {
    ...props,
    itemsCount,
  };
}

export function MdxDivCustomChecklistHeading(
  props: MdxDivCustomChecklistHeadingProps,
) {
  // const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();

  // const checklistSectionHeadingProps = createChecklistSectionHeadingProps(
  //   props,
  //   mdxDivCustomChecklistContext,
  // );
  // if (checklistSectionHeadingProps) {
  //   return (
  //     <>
  //       ChecklistSectionHeading
  //       <ChecklistSectionHeading {...checklistSectionHeadingProps} />
  //     </>
  //   );
  // }

  return (
    <>
      Heading
      <Heading {...props} />
    </>
  );
}
