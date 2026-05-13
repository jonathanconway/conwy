import { Breadcrumb } from "../../../breadcrumb";
import { DateView } from "../../../date";
import { Heading } from "../../../heading";
import { Stack, StackDirections, StackDistributions } from "../../../stack";
import { Text, TextTypes } from "../../../text";

import { ChecklistPageHeaderIssueLink } from "./checklist-page-header-issue-link";
import { ChecklistPageHeaderProps } from "./checklist-page-header-props";

export function ChecklistPageHeader(props: ChecklistPageHeaderProps) {
  return (
    <Stack direction={StackDirections.Column} gap={1}>
      <Breadcrumb
        segments={[
          {
            title: "Checklists",
            url: "/checklists",
          },
          {
            title: props.checklist.meta.title,
          },
        ]}
      />
      <Heading id="top" level={2}>
        {props.checklist.meta.title}
      </Heading>

      <Stack
        direction={StackDirections.Row}
        distribution={StackDistributions.Flow}
        gap={0.5}
      >
        <Text type={TextTypes.Small}>
          <label htmlFor="updated-date">Updated: </label>
          <span id="updated-date">
            <DateView>{props.checklist.meta.updatedDate}</DateView>
          </span>
        </Text>
        • <ChecklistPageHeaderIssueLink checklist={props.checklist} />
        {/* • <ArticleHeaderHistoryLink article={props.article} />
        • <ArticleHeaderSubscribeLink article={props.article} /> */}
      </Stack>

      {/* <ArticleHeaderTags tags={tags} /> */}
    </Stack>
  );
}
