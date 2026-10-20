import { kebabCase } from "lodash";
import pluralize from "pluralize";

import { ToolSectionTitles, ToolSections } from "@/framework";

import { SectionHeadingsList } from "../../section";

export function ToolsSections() {
  const toolsSections = Object.values(ToolSections);

  const toolsSectionHeadings = toolsSections.map((toolSection) => {
    const title = pluralize(ToolSectionTitles[toolSection]);
    const slug = kebabCase(title);
    return {
      title,
      slug,
    };
  });
  return <SectionHeadingsList sectionHeadings={toolsSectionHeadings} />;
}
