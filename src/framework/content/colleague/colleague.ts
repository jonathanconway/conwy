import { SocialLink } from "../social-link";

export interface Colleague {
  readonly slug: string;
  readonly fullName: string;
  readonly links: readonly SocialLink[];
}
