import { IdeaGenParams } from "./idea-gen-params";

export const ideaGenContentMdxTemplate = ({ content }: IdeaGenParams) =>
  `

${content ?? `{/* Full text here */}`}

`.trim();
