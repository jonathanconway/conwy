import { MdxDivCustomChecklist } from "../../mdx";

import { ContentEmbedChecklistProps } from "./content-embed-checklist-props";

export function ContentEmbedChecklist(props: ContentEmbedChecklistProps) {
  return (
    <MdxDivCustomChecklist checklist={props.checklist}>
      {props.children}
    </MdxDivCustomChecklist>
  );
}
