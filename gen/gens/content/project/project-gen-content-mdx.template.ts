import { ProjectGenTemplateParams } from "./project-gen-template-params";

export const projectGenContentMdxTemplate = ({
  content,
}: ProjectGenTemplateParams) =>
  `

${content ?? "{/* Full text here */}"}

`.trim();
