import { ArticleGenTemplateParams } from "./article.params";

export const articlesIndexGen = ({ name }: ArticleGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
