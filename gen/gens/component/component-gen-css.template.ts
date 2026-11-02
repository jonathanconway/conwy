import { ComponentGenTemplateParams } from "./component-gen-template-params";

export const componentGenCssTemplate = ({
  componentNameCamel,
}: ComponentGenTemplateParams) =>
  `

import { style } from "@vanilla-extract/css";

import * as mixins from "./mixins";

export const ${componentNameCamel} = style(mixins.${componentNameCamel});

`.trim();
