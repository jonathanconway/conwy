import { MDX_TEXT_HERE_TOKEN } from "../../../template-utils";

import { IdeaGenParams } from "./idea-gen-params";

export const ideaGenBlurbMdxTemplate = ({
  blurb = MDX_TEXT_HERE_TOKEN,
}: IdeaGenParams) =>
  `

${blurb}

`.trim();
