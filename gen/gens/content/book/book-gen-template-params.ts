import { camelCase, kebabCase } from "lodash";
import { DateTime } from "luxon";

import { BookCategories } from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { BookGenParams } from "./book-gen-params";

export interface BookGenTemplateParams extends BookGenParams {
  readonly nameRootObject: string;
  readonly date: string;

  readonly title: string;
  readonly authors: readonly string[];
  readonly url?: string;

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
  const categoryEnumName = getEnumName(BookCategories, category);

  return {
    title,
    slug,

    authors,
    category,
    url,

    nameRootObject,
    date,
    categoryEnumName,
  };
}
