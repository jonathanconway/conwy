import { ComponentGenTemplateParams } from "./component.params";

export default ({ name }: ComponentGenTemplateParams) =>
  `

export const ${name}ThemeBase = {};

export const ${name}ThemeLight = {};

export const ${name}ThemeDark = {};

`.trim();
