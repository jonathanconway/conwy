import { MDX_TEXT_HERE_TOKEN } from "../../../template-utils";

import { FragmentGenTemplateParams } from "./fragment-gen-template-params";

export const fragmentGenContentMdxTemplate = ({
  content = MDX_TEXT_HERE_TOKEN,
}: FragmentGenTemplateParams) =>
  `

${content}

`.trim();
