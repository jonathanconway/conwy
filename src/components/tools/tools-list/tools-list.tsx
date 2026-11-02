import { groupBy, orderBy } from "lodash";

import { Tool, ToolSectionTitles, ToolSections } from "@/framework";

import { ContentList } from "../../content-list";
import { SectionHeading } from "../../heading";
import { ItemsCount } from "../../items-count";
import { Stack, StackDirections, StackDistributions } from "../../stack";

import { ToolsListItem } from "./tools-list-item";

interface ToolsListProps {
  readonly tools?: readonly Tool[];
}

export function ToolsList(props: ToolsListProps) {
  const { tools } = props;
  const toolsOrdered = orderBy(tools, (tool) => tool.meta.title);
  const toolsSections = Object.values(ToolSections);
  const toolsBySection = groupBy(toolsOrdered, (tool) => tool.meta.section);

  return (
    <Stack gap={2}>
      {toolsSections.map((section) => (
        <Stack key={section} gap={0.5}>
          <Stack
            direction={StackDirections.Row}
            distribution={StackDistributions.Flow}
          >
            <SectionHeading
              afterSlot={<ItemsCount count={toolsBySection[section].length} />}
            >
              {ToolSectionTitles[section]}
            </SectionHeading>
          </Stack>

          <ContentList>
            {toolsBySection[section].map((tool) => (
              <ToolsListItem key={tool.meta.slug} tool={tool} />
            ))}
          </ContentList>
        </Stack>
      ))}
    </Stack>
  );
}
