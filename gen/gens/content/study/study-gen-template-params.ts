import { camelCase } from "lodash";

import { Link, StudyCategories, StudyStatuses } from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { StudyGenParams } from "./study-gen-params";

export interface StudyGenTemplateParams extends StudyGenParams {
  readonly nameRootObject: string;

  readonly statusEnumName: string;
  readonly categoryEnumName: string;
  readonly links: readonly Link[];
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

  const statusEnumName = getEnumName(StudyStatuses, status);
  const categoryEnumName = getEnumName(StudyCategories, category);
  const links: readonly Link[] = linkUrls.map((url) => ({
    url,
    title: "",
  }));

  return {
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

    nameRootObject,
    statusEnumName,
    categoryEnumName,
    links,
  };
}
