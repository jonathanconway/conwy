import { getGenSchemaValues } from "@/framework/gen";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { articleGenContentMdxTemplate } from "./article-gen-content-mdx.template";
import { articleGenIndexTemplate } from "./article-gen-index.template";
import { articleGenMetaTemplate } from "./article-gen-meta.template";
import { articleGenSchema } from "./article-gen-schema";
import { generateArticleGenTemplateParams } from "./article-gen-template-params";
import { articlesGenIndexTemplate } from "./articles-gen-index.template";

export async function article() {
  const articleGenParams = await getGenSchemaValues(articleGenSchema);
  const articleGenTemplateParams =
    generateArticleGenTemplateParams(articleGenParams);

  const articlesPath = `src/content/articles`;
  const articlePath = `${articlesPath}/${articleGenTemplateParams.slug}`;

  folderWrite(articlePath);

  fileWrite(
    `${articlePath}/content.mdx`,
    articleGenContentMdxTemplate(articleGenTemplateParams),
  );

  const articleIndexPath = `${articlePath}/index.tsx`;
  fileWrite(
    articleIndexPath,
    articleGenIndexTemplate(articleGenTemplateParams),
  );
  runPrettier(articleIndexPath);

  const articleMetaPath = `${articlePath}/meta.ts`;
  fileWrite(articleMetaPath, articleGenMetaTemplate(articleGenTemplateParams));
  runPrettier(articleMetaPath);

  const articlesIndexPath = `${articlesPath}/index.ts`;
  fileAppendAndSortLines(
    articlesIndexPath,
    articlesGenIndexTemplate(articleGenTemplateParams),
  );
  runPrettier(articlesIndexPath);
}
