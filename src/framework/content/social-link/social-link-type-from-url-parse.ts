import { Url } from "../url";

import { SocialLinkType, SocialLinkTypes } from "./social-link-type";
import { SocialLinkTypeHosts } from "./social-link-type-hosts";

export function parseSocialLinkTypeFromUrl(url: Url): SocialLinkType {
  const matchingSocialLinkTypeHostsEntry = Object.entries(
    SocialLinkTypeHosts,
  ).find(([_socialLinkType, host]) => url.includes(host));

  if (matchingSocialLinkTypeHostsEntry) {
    const [matchingSocialLinkType] = matchingSocialLinkTypeHostsEntry;
    return matchingSocialLinkType as SocialLinkType;
  }

  return SocialLinkTypes.Website;
}
