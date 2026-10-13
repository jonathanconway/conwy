import { CommunityGenTemplateParams } from "./community-gen-template-params";

export const communitiesGenIndexTemplate = ({
  slug,
}: CommunityGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
