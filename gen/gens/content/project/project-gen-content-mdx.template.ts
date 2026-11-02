import { MDX_TEXT_HERE_TOKEN } from "../../../template-utils";

import { ProjectGenTemplateParams } from "./project-gen-template-params";

export const projectGenContentMdxTemplate = ({
  content = MDX_TEXT_HERE_TOKEN,
}: ProjectGenTemplateParams) =>
  `

${content}

`.trim();
