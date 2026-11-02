import { MDX_TEXT_HERE_TOKEN } from "../../../template-utils";

import { ArticleGenTemplateParams } from "./article-gen-template-params";

export const articleGenContentMdxTemplate = ({
  content = MDX_TEXT_HERE_TOKEN,
}: ArticleGenTemplateParams) =>
  `

${content}

`.trim();
