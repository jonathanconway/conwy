import { Checklist, ChecklistItem } from "@/framework";

import { ContentPageSubHeader } from "../../../content-page";

interface ChecklistItemPageSubHeaderProps {
  readonly checklist: Checklist;
  readonly checklistItem: ChecklistItem;
}

export function ChecklistItemPageSubHeader(
  props: ChecklistItemPageSubHeaderProps,
) {
  return <ContentPageSubHeader content={props.checklist} />;
}
