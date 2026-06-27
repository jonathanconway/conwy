import { HasChildren } from "@/framework/client";

import { Stack, StackDirections } from "../../../stack";

type ChecklistItemLabelProps = HasChildren;

export function ChecklistItemLabel(props: ChecklistItemLabelProps) {
  return (
    <Stack direction={StackDirections.Column} gap={0.25}>
      {props.children}
    </Stack>
  );
}
