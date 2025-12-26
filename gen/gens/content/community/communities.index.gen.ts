import { CommunityGenTemplateParams } from "./community.params";

export const communitiesIndexGen = ({ name }: CommunityGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
