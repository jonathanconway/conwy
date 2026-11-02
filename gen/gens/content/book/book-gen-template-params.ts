import { camelCase, kebabCase } from "lodash";
import { DateTime } from "luxon";

import {
  BookCategories,
  DateString,
  Url,
  assert,
  checkIsDateString,
} from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { BookGenParams } from "./book-gen-params";

export interface BookGenTemplateParams extends BookGenParams {
  readonly nameRootObject: string;
  readonly date: DateString;

  readonly title: string;
  readonly authors: readonly string[];
  readonly url?: Url;
  readonly urlItem: string;

  readonly categoryEnumName: string;
}

export function generateBookGenTemplateParams(
  params: BookGenParams,
): BookGenTemplateParams {
  const {
    title,
    category = BookCategories.SoftwareDevelopment,
    authors,
    url,
  } = params;
  const nameRootObject = `${camelCase(title)}Book`;

  const slug = kebabCase(title);

  const date = DateTime.now().toFormat("yyyy-MM-dd");
  assert(checkIsDateString(date));

  const categoryEnumName = getEnumName(BookCategories, category);

  const urlItem = url ? `"${url}"` : "undefined";

  return {
    title,
    slug,

    authors,
    category,
    url,
    urlItem,

    nameRootObject,
    date,
    categoryEnumName,
  };
}
