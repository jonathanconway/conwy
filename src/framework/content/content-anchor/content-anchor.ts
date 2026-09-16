import { ContentLink } from "../content-link/content-link";

/**
 * Reference to a content item embedded in another content item.
 */
export interface ContentAnchor {
  readonly containingContentLink: ContentLink;
  readonly anchorContentLink: ContentLink;
}
