import { MDX_TEXT_HERE_TOKEN } from "../../../template-utils";

import { IdeaGenParams } from "./idea-gen-params";

export const ideaGenContentMdxTemplate = ({
  content = MDX_TEXT_HERE_TOKEN,
}: IdeaGenParams) =>
  `

${content}

`.trim();
