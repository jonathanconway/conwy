/**
 * Reference to a content item embedded in another content item.
 */
export interface ContentAnchor {
  readonly containingContentType: string;
  readonly containingContentSlug: string;
}
