import { camelCase } from "lodash";
import { DateTime } from "luxon";

import { titleCase } from "@/framework";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { articleContentGen } from "./article.content.mdx.gen";
import { articleIndexGen } from "./article.index.gen";
import { ideaMetaGen } from "./article.meta.gen";
import { ArticleGenParams, ArticleGenTemplateParams } from "./article.params";
import { articlesIndexGen } from "./articles.index.gen";

export async function article(params: ArticleGenParams) {
  const { name } = params;

  const articlesPath = `src/content/articles`;
  const articlePath = `${articlesPath}/${name}`;

  const title = titleCase(name);
  const nameRootObject = `${camelCase(name)}Article`;
  const date = DateTime.now().toFormat("yyyy-MM-dd");

  const articleGenTemplateParams: ArticleGenTemplateParams = {
    ...params,

    title,
    nameRootObject,
    date,
  };

  folderWrite(articlePath);

  fileWrite(
    `${articlePath}/content.mdx`,
    articleContentGen(articleGenTemplateParams),
  );

  const articleIndexPath = `${articlePath}/index.tsx`;
  fileWrite(articleIndexPath, articleIndexGen(articleGenTemplateParams));
  runPrettier(articleIndexPath);

  const articleMetaPath = `${articlePath}/meta.ts`;
  fileWrite(articleMetaPath, ideaMetaGen(articleGenTemplateParams));
  runPrettier(articleMetaPath);

  const articlesIndexPath = `${articlesPath}/index.ts`;
  fileAppendAndSortLines(
    articlesIndexPath,
    articlesIndexGen(articleGenTemplateParams),
  );
  runPrettier(articlesIndexPath);
}
