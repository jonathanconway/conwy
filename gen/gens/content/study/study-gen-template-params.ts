import { camelCase } from "lodash";

import { Link, StudyCategories, StudyStatuses } from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { StudyGenParams } from "./study-gen-params";

export interface StudyGenTemplateParams extends StudyGenParams {
  readonly nameRootObject: string;

  readonly credentialItem: string;

  readonly markItem: string;

  readonly descriptionItem: string;

  readonly statusEnumName: string;

  readonly categoryEnumName: string;

  readonly links: readonly Link[];
  readonly linksItems: string;
}

export function generateStudyGenTemplateParams(
  params: StudyGenParams,
): StudyGenTemplateParams {
  const {
    slug,
    title,
    mainUrl,
    institution,
    type,
    date,
    status,
    credential,
    mark,
    description,
    category,
    linkUrls,
  } = params;
  const nameRootObject = `${camelCase(title)}Study`;

  const credentialItem = credential ? `"${credential}"` : "undefined";

  const markItem = mark ? `"${mark}"` : "undefined";

  const descriptionItem = description ? `"${description}"` : "undefined";

  const statusEnumName = getEnumName(StudyStatuses, status);

  const categoryEnumName = getEnumName(StudyCategories, category);

  const links: readonly Link[] = linkUrls.map((url) => ({
    url,
    title: "",
  }));
  const linksItems = links
    .map((link) =>
      `
      {
        url: "${link.url}",
        title: ${link.title ? `"${link.title}"` : `""`},
      }
`.trim(),
    )
    .join(",\n    ");

  return {
    slug,
    title,
    mainUrl,
    institution,
    type,
    date,

    status,
    credential,
    credentialItem,

    mark,
    markItem,

    description,
    descriptionItem,

    category,

    linkUrls,
    linksItems,

    nameRootObject,
    statusEnumName,
    categoryEnumName,
    links,
  };
}
