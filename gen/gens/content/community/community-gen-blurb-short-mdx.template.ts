import { CommunityGenTemplateParams } from "./community-gen-template-params";

export const communityGenBlurbShortMdxTemplate = ({
  shortBlurb,
}: CommunityGenTemplateParams) =>
  `

${shortBlurb ?? "{/* Full text here */}"}

`.trim();
