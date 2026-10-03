import { camelCase } from "lodash";
import { DateTime } from "luxon";

import {
  DateString,
  ToolSections,
  assert,
  checkIsValidDateString,
} from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { ToolGenParams } from "./tool-gen-params";

export interface ToolGenTemplateParams extends ToolGenParams {
  readonly nameRootObject: string;
  readonly sectionEnumName: string;
  readonly createdDate: DateString;
}

export function generateToolGenTemplateParams(
  params: ToolGenParams,
): ToolGenTemplateParams {
  const {
    title,
    slug,
    category,
    url,
    operatingSystems,
    mainImage,
    description,
    usage,
    section,
  } = params;

  const nameRootObject = `${camelCase(slug)}Tool`;

  const createdDate = DateTime.now().toFormat("yyyy-MM-dd");
  assert(checkIsValidDateString(createdDate));

  const sectionEnumName = getEnumName(ToolSections, params.section);

  return {
    nameRootObject,

    title,
    slug,
    category,
    url,
    operatingSystems,
    mainImage,
    description,
    createdDate,
    usage,

    section,
    sectionEnumName,
  };
}
