import { SocialLinkType } from "./social-link-type";

export interface SocialLink {
  readonly type: SocialLinkType;
  readonly url: string;
  readonly title?: string;
}
