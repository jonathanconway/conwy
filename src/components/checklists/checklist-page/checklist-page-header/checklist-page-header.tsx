import { Breadcrumb } from "../../../breadcrumb";
import { ContentPageHeader } from "../../../content-page";

import { ChecklistPageHeaderProps } from "./checklist-page-header-props";

export function ChecklistPageHeader(props: ChecklistPageHeaderProps) {
  const fullTitle = `${props.checklist.meta.title} checklist`;
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
              title: fullTitle,
            },
          ]}
        />
      }
      title={fullTitle}
      updatedDate={props.checklist.meta.updatedDate}
    />
  );
}
