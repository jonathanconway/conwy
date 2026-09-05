import {
  Checklist,
  ChecklistItem,
  truncateWithEllipsis,
} from "@/framework/client";

import { Breadcrumb } from "../../../breadcrumb";
import { ContentPageHeader } from "../../../content-page";

interface ChecklistItemPageHeaderProps {
  readonly checklist: Checklist;
  readonly checklistItem: ChecklistItem;
}

export function ChecklistItemPageHeader(props: ChecklistItemPageHeaderProps) {
  return (
    <ContentPageHeader
      content={props.checklist}
      preHeader={
        <Breadcrumb
          segments={[
            {
              title: "Checklists",
              url: "/checklists",
            },
            {
              title: props.checklist.meta.title,
              url: `/checklists/${props.checklist.meta.slug}`,
            },
            {
              title: truncateWithEllipsis(props.checklistItem.title),
            },
          ]}
        />
      }
      title={props.checklistItem.title}
      updatedDate={props.checklist.meta.updatedDate}
    />
  );
}
