import { ArticleGenTemplateParams } from "./article-gen-template-params";

export const articleGenContentMdxTemplate = ({
  title,
}: ArticleGenTemplateParams) =>
  `

## ${title}

{/* Full text here */}

`.trim();
