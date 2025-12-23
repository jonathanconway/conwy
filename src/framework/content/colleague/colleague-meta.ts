import { MetaBase } from "../meta";
import { SocialLink } from "../social-link";

export interface ColleagueMeta extends MetaBase {
  readonly links: readonly SocialLink[];
}
