import { groupBy, orderBy } from "lodash";

import * as tools from "@/content/tools";
import { sentenceCase } from "@/framework/client";

import { ContentList } from "../content-list";
import { SectionHeading } from "../heading";

import { Tool } from "./tool";
import * as styles from "./tools-list.css";

export function ToolsList() {
  const toolsItems = Object.values(tools);
  const toolsOrdered = orderBy(toolsItems, (tool) => tool.section + tool.title);
  const toolsBySection = groupBy(toolsOrdered, (tool) => tool.section);
  const toolsBySectionEntries = Object.entries(toolsBySection);

  return (
    <>
      {toolsBySectionEntries.map(([section, tools]) => (
        <div className={styles.section}>
          <SectionHeading>{sentenceCase(section)}</SectionHeading>

          <ContentList>
            {tools.map((tool) => (
              <Tool key={tool.slug} tool={tool} />
            ))}
          </ContentList>
        </div>
      ))}
    </>
  );
}
