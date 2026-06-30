import { kebabCase } from "lodash";

import { StackDistributions } from "@/components/stack/stack-distribution";

import { Heading, SectionHeading } from "../../../heading";
import { Stack, StackDirections } from "../../../stack";
import { Text, TextTypes } from "../../../text";

import { ChecklistSectionHeadingProps } from "./checklist-section-heading-props";
import { CHECKLIST_SECTION_HEADING_TEXT_CLASS_NAME } from "./checklist-section-heading.const";

export function ChecklistSectionHeading(props: ChecklistSectionHeadingProps) {
  const { children, itemsCount, headingText, ...restProps } = props;

  if (itemsCount === 0) {
    return;
  }

  const headingInner = (
    <Stack
      gap={1}
      direction={StackDirections.Row}
      distribution={StackDistributions.Flow}
    >
      <Stack
        className={CHECKLIST_SECTION_HEADING_TEXT_CLASS_NAME}
        gap={0.5}
        direction={StackDirections.Row}
        distribution={StackDistributions.Flow}
      >
        {children}
      </Stack>

      <Text type={TextTypes.Small}>({itemsCount})</Text>
    </Stack>
  );

  if (props.level === 3) {
    return (
      <SectionHeading {...restProps} id={kebabCase(headingText)}>
        {headingInner}
      </SectionHeading>
    );
  }

  return <Heading {...restProps}>{headingInner}</Heading>;
}
