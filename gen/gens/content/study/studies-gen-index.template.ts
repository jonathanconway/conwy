import { StudyGenTemplateParams } from "./study-gen-template-params";

export const studiesIndexGen = ({ slug }: StudyGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
