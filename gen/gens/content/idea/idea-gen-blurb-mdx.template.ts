import { IdeaGenParams } from "./idea-gen-params";

export const ideaGenBlurbMdxTemplate = ({ blurb }: IdeaGenParams) =>
  `

${blurb ?? `{/* Full text here */}`}

`.trim();
