import { IdeaGenTemplateParams } from "./idea.params";

export const ideasIndexGen = ({ name }: IdeaGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
