import { Image } from "../image";
import { MetaBase } from "../meta";
import { PostTag } from "../post";
import { SocialLink } from "../social-link";

import { EngagementTech } from "./engagement-tech";

export interface EngagementMeta extends MetaBase {
  readonly title: string;

  readonly mainImage: Image;

  readonly images: readonly Image[];
  readonly tags: readonly PostTag[];
  readonly socialLinks: readonly SocialLink[];
  readonly techs: readonly EngagementTech[];
}
