import { ToolGenTemplateParams } from "./tool-gen-template-params";

export const toolGenMetaTemplate = ({
  slug,
  title,
  category,
  url,
  operatingSystems,
  createdDate,
  description,
  mainImage,
}: ToolGenTemplateParams) =>
  `

import { ToolMeta, ToolSections } from "@/framework/client";

export const meta: ToolMeta = {
  section: ToolSections.App,
  slug: "${slug}",
  title: "${title}",
  category: "${category}",
  createdDate: "${createdDate}",
  operatingSystems: [${(operatingSystems ?? []).map((os) => `"${os}"`).join(", ")}],
  url: "${url}",
  description: "${description}",
  mainImage: ${mainImage ? `"${mainImage}"` : undefined},
};

`.trim();
