import { groupBy, orderBy } from "lodash";

import { Tool as Tool_, sentenceCase } from "@/framework";

import { Fragment } from "../fragments";
import { Heading } from "../heading";

import { Tool } from "./tool";
import * as styles from "./tools.styles";

interface ToolsProps {
  readonly tools: readonly Tool_[];
}

export function Tools({ tools }: ToolsProps) {
  const toolsOrdered = orderBy(tools, (tool) => tool.section + tool.title);
  const toolsBySection = groupBy(toolsOrdered, (tool) => tool.section);

  return (
    <div>
      {Object.entries(toolsBySection).map(([section, tools]) => (
        <>
          <Fragment>
            <Heading level={4}>{sentenceCase(section)}</Heading>
          </Fragment>
          <div className={styles.toolsContainer}>
            {tools.map((tool) => (
              <Tool key={tool.slug} tool={tool} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
