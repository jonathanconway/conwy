import { HasChildren } from "@/framework/client";

type ChecklistItemLabelProps = HasChildren;

export function ChecklistItemLabel(props: ChecklistItemLabelProps) {
  return <div>{props.children}</div>;
}
