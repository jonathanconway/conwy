import { camelCase } from "lodash";
import { DateTime } from "luxon";

import {
  DateString,
  ToolSections,
  assert,
  checkIsDateString,
} from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { ToolGenParams } from "./tool-gen-params";

export interface ToolGenTemplateParams extends ToolGenParams {
  readonly operatingSystemsItems: string;
  readonly nameRootObject: string;
  readonly sectionEnumName: string;
  readonly createdDate: DateString;
  readonly mainImageCode: string;
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
  assert(checkIsDateString(createdDate));

  const sectionEnumName = getEnumName(ToolSections, params.section);

  const operatingSystemsItems = (operatingSystems ?? [])
    .map((os) => `"${os}"`)
    .join(", ");

  const mainImageCode = mainImage ? `${mainImage}` : "undefined";

  return {
    nameRootObject,

    title,
    slug,
    category,
    url,
    operatingSystems,
    operatingSystemsItems,
    mainImage,
    mainImageCode,
    description,
    createdDate,
    usage,

    section,
    sectionEnumName,
  };
}
