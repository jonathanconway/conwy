import { ComponentGenTemplateParams } from "./component-gen-template-params";

export const componentGenPropsTemplate = ({
  componentPropsName,
}: ComponentGenTemplateParams) =>
  `
export interface ${componentPropsName} {};

`.trim();
