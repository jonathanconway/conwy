import { getContentUrlPath } from "../content-path/content-url-path";

import { ContentAnchor } from "./content-anchor";

export function getContentAnchorLink({
  anchorContentLink,
  containingContentLink,
}: ContentAnchor) {
  return `/${getContentUrlPath(containingContentLink)}#content--${anchorContentLink.type}--${anchorContentLink.slug}`;
}
