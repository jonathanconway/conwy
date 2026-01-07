import { groupBy, kebabCase, orderBy } from "lodash";
import pluralize from "pluralize";

import * as tools from "@/content/tools";
import { ToolSections, sentenceCase } from "@/framework/client";

import { Link } from "../../link";
import { Text, TextSizes, TextTypes } from "../../text";

export function ToolsSections() {
  const toolsItems = Object.values(tools);
  const toolsOrdered = orderBy(toolsItems, (tool) => tool.meta.title);
  const toolsBySection = groupBy(toolsOrdered, (tool) => tool.meta.section);
  const sections = Object.values(ToolSections);

  return (
    <Text type={TextTypes.UnorderedList}>
      {sections.map((section) => (
        <li key={section}>
          <Link href={`#${kebabCase(pluralize(section))}`} size={TextSizes.sm}>
            {sentenceCase(pluralize(section))}
          </Link>{" "}
          <Text type={TextTypes.Small}>({toolsBySection[section].length})</Text>
        </li>
      ))}
    </Text>
  );
}
