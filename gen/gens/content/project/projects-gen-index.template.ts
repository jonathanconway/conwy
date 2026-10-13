import { ProjectGenTemplateParams } from "./project-gen-template-params";

export const projectsGenIndexTemplate = ({ slug }: ProjectGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
