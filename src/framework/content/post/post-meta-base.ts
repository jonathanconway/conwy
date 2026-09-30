import { MetaBase } from "../meta";

import { PostDiscussionLink } from "./post-discussion-link";

export interface PostMetaBase<TMetaExtensions extends object = object>
  extends MetaBase<TMetaExtensions> {
  readonly discussionLinks: readonly PostDiscussionLink[];
}
