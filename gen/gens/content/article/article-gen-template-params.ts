import { camelCase, kebabCase } from "lodash";
import { DateTime } from "luxon";

import { DateString, PostTags, assert, checkIsDateString } from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { ArticleGenParams } from "./article-gen-params";

export interface ArticleGenTemplateParams extends ArticleGenParams {
  readonly nameRootObject: string;
  readonly slug: string;
  readonly date: DateString;
  readonly tagsEnumNames: readonly string[];
}

export function generateArticleGenTemplateParams(
  params: ArticleGenParams,
): ArticleGenTemplateParams {
  const { title, tags } = params;
  const nameRootObject = `${camelCase(title)}Article`;
  const slug = kebabCase(title);

  const date = DateTime.now().toFormat("yyyy-MM-dd");
  assert(checkIsDateString(date));

  const tagsEnumNames = tags.map((tag) => getEnumName(PostTags, tag));

  return {
    title,

    tags,
    tagsEnumNames,

    nameRootObject,
    slug,
    date,
  };
}
