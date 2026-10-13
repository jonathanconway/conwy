import { IdeaGenTemplateParams } from "./idea-gen-template-params";

export const ideasGenIndexTemplate = ({ slug }: IdeaGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
