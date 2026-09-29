import { FragmentGenTemplateParams } from "./fragment-gen-template-params";

export const fragmentGenContentMdxTemplate = ({
  content,
}: FragmentGenTemplateParams) =>
  `
${content}
`.trim();
