import { camelCase, kebabCase } from "lodash";
import { DateTime } from "luxon";

import { ArticleGenParams } from "./article-gen-params";

export interface ArticleGenTemplateParams extends ArticleGenParams {
  readonly nameRootObject: string;
  readonly slug: string;
  readonly date: string;
}

export function generateArticleGenTemplateParams(params: ArticleGenParams) {
  const { title, category } = params;
  const nameRootObject = `${camelCase(title)}Article`;
  const slug = kebabCase(title);
  const date = DateTime.now().toFormat("yyyy-MM-dd");

  return {
    title,
    category,

    nameRootObject,
    slug,
    date,
  };
}
