import { MdxDivCustomChecklistClient } from "./mdx-div-custom-checklist-client";
import { MdxDivCustomChecklistProps } from "./mdx-div-custom-checklist-props";

export async function MdxDivCustomChecklist(props: MdxDivCustomChecklistProps) {
  return (
    <MdxDivCustomChecklistClient checklistMeta={props.checklist.meta}>
      {props.children}
    </MdxDivCustomChecklistClient>
  );
}
