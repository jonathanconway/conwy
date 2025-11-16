import { ComponentGenTemplateParams } from "./component.params";

export default ({ name }: ComponentGenTemplateParams) =>
  `

export const ${name} = {};

`.trim();
