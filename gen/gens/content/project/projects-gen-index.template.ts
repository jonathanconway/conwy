import { ProjectGenTemplateParams } from "./project-gen-template-params";

export const projectsIndexGen = ({ slug }: ProjectGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
