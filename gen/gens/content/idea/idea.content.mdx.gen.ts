import { IdeaGenTemplateParams } from "./idea.params";

export const ideaContentGen = ({ title }: IdeaGenTemplateParams) =>
  `

## ${title}

{/* Full text here */}

`.trim();
