import { MDX_TEXT_HERE_TOKEN } from "../../../template-utils";

import { MicroGenTemplateParams } from "./micro-gen-template-params";

export const microGenContentMdxTemplate = ({
  content = MDX_TEXT_HERE_TOKEN,
}: MicroGenTemplateParams) =>
  `

${content}

`.trim();
