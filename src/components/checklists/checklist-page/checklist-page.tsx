import { Breadcrumb } from "../../breadcrumb";
import { Heading } from "../../heading";
import { MainAsideLayout } from "../../layouts";
import { MdxContainer, MdxDivCustomChecklist } from "../../mdx";
import { Stack } from "../../stack";

import { ChecklistPageProps } from "./checklist-page-props";

export function ChecklistPage(props: ChecklistPageProps) {
  const { checklist } = props;

  return (
    <MainAsideLayout
      main={
        <Stack gap={2}>
          <Stack gap={1}>
            <Breadcrumb
              segments={[
                {
                  title: "Checklists",
                  url: "/checklists",
                },
                {
                  title: checklist.meta.title,
                },
              ]}
            />
            <Heading level={2}>{checklist.meta.title} checklist</Heading>
          </Stack>

          <MdxContainer>
            <MdxDivCustomChecklist checklist={props.checklist}>
              {checklist.content}
            </MdxDivCustomChecklist>
          </MdxContainer>
        </Stack>
      }
    />
  );
}
