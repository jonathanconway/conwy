import { IdeaGenParams } from "./idea-gen-params";

export const ideaBlurbGen = ({ blurb }: IdeaGenParams) =>
  `

${blurb ?? `{/* Full text here */}`}

`.trim();
