import { ContentLink } from "../content-link/content-link";
import { CONTENT_TYPE_LABELS_PLURAL } from "../content-type/content-type-labels-plural";

export function getContentUrlPath(contentLink: ContentLink) {
  const contentTypePluralized = CONTENT_TYPE_LABELS_PLURAL[contentLink.type];
  return `${contentTypePluralized}/${contentLink.slug}`;
}
