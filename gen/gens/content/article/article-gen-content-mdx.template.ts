import { ArticleGenTemplateParams } from "./article-gen-template-params";

export const articleGenContentMdxTemplate = ({
  content,
}: ArticleGenTemplateParams) =>
  `

${content ?? "{/* Full text here */}"}

`.trim();
