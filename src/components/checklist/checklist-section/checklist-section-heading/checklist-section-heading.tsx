import { kebabCase } from "lodash";

import { StackDistributions } from "@/components/stack/stack-distribution";

import {
  Heading,
  SectionHeading,
  getHeadingSpacingStyles,
} from "../../../heading";
import { ItemsCount } from "../../../items-count";
import { Stack, StackDirections } from "../../../stack";

import { ChecklistSectionHeadingProps } from "./checklist-section-heading-props";
import { CHECKLIST_SECTION_HEADING_TEXT_CLASS_NAME } from "./checklist-section-heading.const";

export function ChecklistSectionHeading(props: ChecklistSectionHeadingProps) {
  const { children, itemsCount, headingText, ...restProps } = props;

  if (itemsCount === 0) {
    return;
  }

  const headingInner = (
    <Stack
      className={CHECKLIST_SECTION_HEADING_TEXT_CLASS_NAME}
      gap={0.5}
      direction={StackDirections.Row}
      distribution={StackDistributions.Flow}
    >
      {children}
    </Stack>
  );

  const headingOuter =
    props.level === 3 ? (
      <SectionHeading styleInner id={kebabCase(headingText)} {...restProps}>
        {headingInner}
      </SectionHeading>
    ) : (
      <Heading styleInner {...restProps}>
        {headingInner}
      </Heading>
    );

  const outerClassName = getHeadingSpacingStyles(props.level ?? 0);

  return (
    <Stack
      className={outerClassName}
      gap={1}
      direction={StackDirections.Row}
      distribution={StackDistributions.Flow}
    >
      {headingOuter}

      <ItemsCount count={itemsCount} />
    </Stack>
  );
}
