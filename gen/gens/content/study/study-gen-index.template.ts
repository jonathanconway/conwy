import { StudyGenTemplateParams } from "./study-gen-template-params";

export const studyGenIndexTemplate = ({
  slug,
  title,
  mainUrl,
  institution,
  type,
  date,
  credential,
  credentialItem,
  mark,
  markItem,
  description,
  descriptionItem,
  nameRootObject,
  statusEnumName,
  categoryEnumName,
  links,
  linksItems,
}: StudyGenTemplateParams) =>
  `

import {
  ContentTypes,
  Study,
  StudyCategories,
  StudyStatuses,
} from "@/framework";

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
    credential: ${credentialItem},
    mark: ${markItem},
    description: ${descriptionItem},
    category: StudyCategories.${categoryEnumName},
    links: [${linksItems}],
  },
};

`.trim();
