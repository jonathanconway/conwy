import { camelCase, kebabCase } from "lodash";
import { DateTime } from "luxon";

import { DateString, assert, checkIsValidDateString } from "@/framework";

import { ArticleGenParams } from "./article-gen-params";

export interface ArticleGenTemplateParams extends ArticleGenParams {
  readonly nameRootObject: string;
  readonly slug: string;
  readonly date: DateString;
}

export function generateArticleGenTemplateParams(
  params: ArticleGenParams,
): ArticleGenTemplateParams {
  const { title, category } = params;
  const nameRootObject = `${camelCase(title)}Article`;
  const slug = kebabCase(title);

  const date = DateTime.now().toFormat("yyyy-MM-dd");
  assert(checkIsValidDateString(date));

  return {
    title,
    category,

    nameRootObject,
    slug,
    date,
  };
}
