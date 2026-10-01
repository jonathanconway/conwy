import { ToolGenTemplateParams } from "./tool.params";

export const toolGen = ({
  name,
  nameRootObject,
  title,
  url,
  category,
  sectionEnumName,
  date,
  operatingSystems,
  description,
}: ToolGenTemplateParams) =>
  `

import { ContentTypes, Tool, ToolSections } from "@/framework/client";

export const ${nameRootObject}: Tool = {
  type: ContentTypes.Tool,
  meta: {
    slug: "${name}",
    title: "${title}",
    section: ToolSections.${sectionEnumName},
    date: "${date}",
    mainImage: "/images/tools/${name}.png",${
      operatingSystems
        ? `
    operatingSystems: [${operatingSystems.map((os) => `"${os}"`).join(", ")}],`
        : ""
    }${
      url
        ? `
    url: "${url}",`
        : ""
    }${
      category
        ? `
    category: "${category}",`
        : ""
    }${
      description
        ? `
    description: "${description}",`
        : ""
    }
  }
};

`.trim();
