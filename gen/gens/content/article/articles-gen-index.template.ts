import { ArticleGenTemplateParams } from "./article-gen-template-params";

export const articlesGenIndexTemplate = ({ slug }: ArticleGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
