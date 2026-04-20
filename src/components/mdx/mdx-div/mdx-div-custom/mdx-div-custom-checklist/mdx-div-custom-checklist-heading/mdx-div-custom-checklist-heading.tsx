import { isArray } from "lodash";

import {
  assert,
  getTreeSubBranchByBranch,
  getTreeSubBranchDescendantsCount,
} from "@/framework/client";

import { ChecklistSectionHeading } from "../../../../../checklist";
import { Heading } from "../../../../../heading";
import { useMdxDivCustomChecklistContext } from "../mdx-div-custom-checklist-context";

import { MdxDivCustomChecklistHeadingProps } from "./mdx-div-custom-checklist-heading-props";

export function MdxDivCustomChecklistHeading(
  props: MdxDivCustomChecklistHeadingProps,
) {
  const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();
  assert(mdxDivCustomChecklistContext);

  if (
    isArray(props.children) &&
    mdxDivCustomChecklistContext.checklistMeta.itemsByHeadingText
  ) {
    const headingText = props.children?.[0].toString().trim();

    const sectionDetails = getTreeSubBranchByBranch(
      mdxDivCustomChecklistContext.checklistMeta.itemsByHeadingText,
      headingText,
    );

    if (
      sectionDetails &&
      (sectionDetails.children.length > 0 ||
        sectionDetails?.subBranches.length > 0)
    ) {
      const descendantsCount = getTreeSubBranchDescendantsCount(sectionDetails);

      return (
        <ChecklistSectionHeading {...props} itemsCount={descendantsCount} />
      );
    }
  }

  return <Heading {...props} />;
}
