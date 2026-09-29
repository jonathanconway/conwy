import { MicroGenTemplateParams } from "./micro-gen-template-params";

export const microGenContentMdxTemplate = ({
  content,
}: MicroGenTemplateParams) =>
  `

${content}

`.trim();
