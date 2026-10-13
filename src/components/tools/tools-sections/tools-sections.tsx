import { kebabCase } from "lodash";
import pluralize from "pluralize";

import { ToolSectionTitles, ToolSections } from "@/framework";

import { Link } from "../../link";
import { ListItem, ListUnordered } from "../../list";
import { TextSizes } from "../../text";

export function ToolsSections() {
  const sections = Object.values(ToolSections);

  return (
    <ListUnordered noBullets>
      {sections.map((section) => (
        <ListItem key={section}>
          <Link href={`#${kebabCase(pluralize(section))}`} size={TextSizes.sm}>
            {ToolSectionTitles[section]}
          </Link>
        </ListItem>
      ))}
    </ListUnordered>
  );
}
