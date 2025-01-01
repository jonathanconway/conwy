import { groupBy, orderBy } from "lodash";

import { Tool as Tool_, sentenceCase } from "@/framework/client";

import { Heading } from "../heading";
import { List } from "../list";

import { Tool } from "./tool";
import * as styles from "./tools.css";

interface ToolsProps {
  readonly tools: readonly Tool_[];
}

export function Tools({ tools }: ToolsProps) {
  const toolsOrdered = orderBy(tools, (tool) => tool.section + tool.title);
  const toolsBySection = groupBy(toolsOrdered, (tool) => tool.section);

  return (
    <div>
      {Object.entries(toolsBySection).map(([section, tools]) => (
        <div className={styles.section}>
          <Heading level={4}>{sentenceCase(section)}</Heading>

          <List>
            {tools.map((tool) => (
              <Tool key={tool.slug} tool={tool} />
            ))}
          </List>
        </div>
      ))}
    </div>
  );
}
