import { Heading } from "../../../heading";
import { Stack, StackDirections } from "../../../stack";
import { Text, TextTypes } from "../../../text";

import { ChecklistSectionHeadingProps } from "./checklist-section-heading-props";

export function ChecklistSectionHeading(props: ChecklistSectionHeadingProps) {
  const { children, ...restProps } = props;
  return (
    <Heading {...restProps}>
      <Stack gap={2} direction={StackDirections.Row}>
        {children}

        <Text type={TextTypes.Small}>({props.itemsCount})</Text>
      </Stack>
    </Heading>
  );
}
