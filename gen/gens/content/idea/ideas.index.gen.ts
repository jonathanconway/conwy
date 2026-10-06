import { IdeaGenTemplateParams } from "./idea-gen-template-params";

export const ideasIndexGen = ({ slug }: IdeaGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
