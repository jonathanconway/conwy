import { groupBy, orderBy } from "lodash";
import pluralize from "pluralize";

import * as tools from "@/content/tools";
import { ToolSections, sentenceCase } from "@/framework/client";

import { ContentList } from "../content-list";
import { SectionHeading } from "../heading";

import { Tool } from "./tool";
import * as styles from "./tools-list.css";

export function ToolsList() {
  const toolsItems = Object.values(tools);
  const toolsOrdered = orderBy(toolsItems, (tool) => tool.title);
  const toolsSections = Object.values(ToolSections);
  const toolsBySection = groupBy(toolsOrdered, (tool) => tool.section);

  return (
    <>
      {toolsSections.map((section) => (
        <div key={section} className={styles.section}>
          <SectionHeading>{sentenceCase(pluralize(section))}</SectionHeading>

          <ContentList>
            {toolsBySection[section].map((tool) => (
              <Tool key={tool.slug} tool={tool} />
            ))}
          </ContentList>
        </div>
      ))}
    </>
  );
}
