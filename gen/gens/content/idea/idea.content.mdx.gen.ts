import { IdeaGenParams } from "./idea-gen-params";

export const ideaContentGen = ({ title }: IdeaGenParams) =>
  `

${title ?? `{/* Full text here */}`}

`.trim();
