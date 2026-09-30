import { SocialLink } from "../../social-link";

export interface PostDiscussionLink extends SocialLink {
  readonly commentCount?: number;
  readonly likeCount?: number;
}
