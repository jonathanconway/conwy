import { ComponentGenTemplateParams } from "./component.params";

export default ({ name }: ComponentGenTemplateParams) =>
  `

import { style } from "@vanilla-extract/css";

import * as mixins from "./${name}.mixins";

export const ${name} = style(mixins.${name});

`.trim();
