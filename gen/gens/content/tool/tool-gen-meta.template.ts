import { ToolGenTemplateParams } from "./tool-gen-template-params";

export const toolGenMetaTemplate = ({
  slug,
  title,
  category,
  url,
  operatingSystemsItems,
  createdDate,
  description,
  mainImageCode,
}: ToolGenTemplateParams) =>
  `

import { ToolMeta, ToolSections } from "@/framework";

export const meta: ToolMeta = {
  section: ToolSections.App,
  slug: "${slug}",
  title: "${title}",
  category: "${category}",
  createdDate: "${createdDate}",
  operatingSystems: [${operatingSystemsItems}],
  url: "${url}",
  description: "${description}",
  mainImage: ${mainImageCode},
};

`.trim();
