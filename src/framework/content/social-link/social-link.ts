import { Link } from "../link";

import { SocialLinkType } from "./social-link-type";

export interface SocialLink extends Link {
  readonly type: SocialLinkType;
}
