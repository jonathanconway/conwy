import { kebabCase } from "lodash";
import pluralize from "pluralize";

import { ToolSectionTitles, ToolSections } from "@/framework/client";

import { Link } from "../../link";
import { Text, TextSizes, TextTypes } from "../../text";

export function ToolsSections() {
  const sections = Object.values(ToolSections);

  return (
    <Text type={TextTypes.UnorderedList}>
      {sections.map((section) => (
        <li key={section}>
          <Link href={`#${kebabCase(pluralize(section))}`} size={TextSizes.sm}>
            {ToolSectionTitles[section]}
          </Link>
        </li>
      ))}
    </Text>
  );
}
