import { groupBy, orderBy } from "lodash";

import * as tools from "@/content/tools";
import { ToolSectionTitles, ToolSections } from "@/framework/client";

import { ContentList } from "../../content-list";
import { SectionHeading } from "../../heading";
import { ItemsCount } from "../../items-count";
import { Stack, StackDirections, StackDistributions } from "../../stack";

import { ToolsListItem } from "./tools-list-item";
import * as styles from "./tools-list.css";

export function ToolsList() {
  const toolsItems = Object.values(tools);
  const toolsOrdered = orderBy(toolsItems, (tool) => tool.meta.title);
  const toolsSections = Object.values(ToolSections);
  const toolsBySection = groupBy(toolsOrdered, (tool) => tool.meta.section);

  return (
    <Stack gap={2}>
      {toolsSections.map((section) => (
        <div key={section} className={styles.section}>
          <Stack>
            <Stack
              direction={StackDirections.Row}
              distribution={StackDistributions.Flow}
            >
              <SectionHeading styleInner>
                {ToolSectionTitles[section]}
              </SectionHeading>
              <ItemsCount count={toolsBySection[section].length} />
            </Stack>

            <ContentList>
              {toolsBySection[section].map((tool) => (
                <ToolsListItem key={tool.meta.slug} tool={tool} />
              ))}
            </ContentList>
          </Stack>
        </div>
      ))}
    </Stack>
  );
}
