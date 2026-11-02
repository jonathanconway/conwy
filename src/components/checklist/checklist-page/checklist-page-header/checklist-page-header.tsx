import { ContentPageSubHeader } from "../../../content-page";

import { ChecklistPageSubHeaderProps } from "./checklist-page-header-props";

export function ChecklistPageSubHeader(props: ChecklistPageSubHeaderProps) {
  return <ContentPageSubHeader content={props.checklist} />;
}
