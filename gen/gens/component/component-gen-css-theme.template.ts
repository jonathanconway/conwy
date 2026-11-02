import { ComponentGenTemplateParams } from "./component-gen-template-params";

export const componentGenCssThemeTemplate = ({
  componentNameCamel,
}: ComponentGenTemplateParams) =>
  `

export const ${componentNameCamel}ThemeBase = {};

export const ${componentNameCamel}ThemeLight = {};

export const ${componentNameCamel}ThemeDark = {};

`.trim();
