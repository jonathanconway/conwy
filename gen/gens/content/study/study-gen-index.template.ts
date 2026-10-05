import { StudyGenTemplateParams } from "./study-gen-template-params";

export const studyGenIndexTemplate = ({
  slug,
  title,
  mainUrl,
  institution,
  type,
  date,
  credential,
  mark,
  description,
  nameRootObject,
  statusEnumName,
  categoryEnumName,
  links,
}: StudyGenTemplateParams) =>
  `

import {
  ContentTypes,
  Study,
  StudyCategories,
  StudyStatuses,
} from "@/framework/client";

export const ${nameRootObject}: Study = {
  type: ContentTypes.Study,
  meta: {
    title: "${title}",
    mainUrl: "${mainUrl}",
    date: "${date}",
    institution: "${institution}",
    slug: "${slug}",
    type: "${type}",
    status: StudyStatuses.${statusEnumName},
    credential: ${credential ? `"${credential}"` : "undefined"},
    mark: ${mark ? `"${mark}"` : "undefined"},
    description: ${description ? `"${description}"` : "undefined"},
    category: StudyCategories.${categoryEnumName},
    links: [${links
      .map((link) =>
        `
      {
        url: "${link.url}",
        title: ${link.title ? `"${link.title}"` : `""`},
      }
`.trim(),
      )
      .join(",\n    ")}],
  },
};

`.trim();
