import { ArticleGenTemplateParams } from "./article.params";

export const articleContentGen = ({ title }: ArticleGenTemplateParams) =>
  `

## ${title}

{/* Full text here */}

`.trim();
