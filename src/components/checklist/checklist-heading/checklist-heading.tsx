import { isArray, isString } from "lodash";

import {
  getTreeSubBranchByBranch,
  getTreeSubBranchDescendantsCount,
} from "@/framework/client";

import {
  ChecklistContextValue,
  useChecklistContext,
} from "../checklist-context";
import { ChecklistSectionHeading } from "../checklist-section";

import { ChecklistHeadingProps } from "./checklist-heading-props";

function createChecklistSectionHeadingProps(
  props: ChecklistHeadingProps,
  checklistContextValue?: ChecklistContextValue,
) {
  if (!checklistContextValue?.checklistMeta?.extensions) {
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
    checklistContextValue.checklistMeta.extensions.itemsByHeadingText,
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

export function ChecklistHeading(props: ChecklistHeadingProps) {
  const checklistContext = useChecklistContext();

  const checklistSectionHeadingProps = createChecklistSectionHeadingProps(
    props,
    checklistContext,
  );

  if (checklistSectionHeadingProps) {
    return <ChecklistSectionHeading {...checklistSectionHeadingProps} />;
  }
}
