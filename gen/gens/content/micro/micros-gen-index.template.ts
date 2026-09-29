import { MicroGenTemplateParams } from "./micro-gen-template-params";

export const microsGenIndexTemplate = ({ slug }: MicroGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
