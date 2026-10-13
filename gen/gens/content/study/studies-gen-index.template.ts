import { StudyGenTemplateParams } from "./study-gen-template-params";

export const studiesGenIndexTemplate = ({ slug }: StudyGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
