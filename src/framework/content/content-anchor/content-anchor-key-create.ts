import { createContentLinkKey } from "../content-link";

import { ContentAnchor } from "./content-anchor";

export function createContentAnchorKey({
  anchorContentLink,
  containingContentLink,
}: ContentAnchor) {
  return [anchorContentLink, containingContentLink]
    .map(createContentLinkKey)
    .join("#");
}
