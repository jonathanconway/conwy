import { groupBy, orderBy } from "lodash";

import * as tools from "@/content/tools";
import { sentenceCase } from "@/framework/client";

import { ContentList } from "../content-list";
import { Fragment } from "../fragments";
import { SectionHeading } from "../heading";
import { Link } from "../link";
import { List } from "../list";
import { TextSizes } from "../text";

import { Tool } from "./tool";
import * as styles from "./tools-list.css";

export function ToolsList() {
  const toolsItems = Object.values(tools);
  const toolsOrdered = orderBy(toolsItems, (tool) => tool.section + tool.title);
  const toolsBySection = groupBy(toolsOrdered, (tool) => tool.section);
  const toolsBySectionEntries = Object.entries(toolsBySection);

  const sectionKeys = Object.keys(toolsBySection);

  return (
    <div>
      <Fragment>
        <ul>
          {sectionKeys.map((section) => (
            <li key={section}>
              <Link href={`#${section}`} size={TextSizes.sm}>
                {sentenceCase(section)}
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>

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
    </div>
  );
}
