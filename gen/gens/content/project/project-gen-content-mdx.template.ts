import { ProjectGenTemplateParams } from "./project-gen-template-params";

export const projectGenContentMdxTemplate = ({
  title,
}: ProjectGenTemplateParams) =>
  `

## ${title}

{/* Full text here */}

`.trim();
