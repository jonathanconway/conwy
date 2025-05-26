import { groupBy, orderBy } from "lodash";

import * as tools from "@/content/tools";
import { sentenceCase } from "@/framework/client";

import { Link } from "../link";
import { TextSizes } from "../text";

export function ToolsSections() {
  const toolsItems = Object.values(tools);
  const toolsOrdered = orderBy(toolsItems, (tool) => tool.section + tool.title);
  const toolsBySection = groupBy(toolsOrdered, (tool) => tool.section);

  const sectionKeys = Object.keys(toolsBySection);

  return (
    <ul>
      {sectionKeys.map((section) => (
        <li key={section}>
          <Link href={`#${section}`} size={TextSizes.sm}>
            {sentenceCase(section)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
