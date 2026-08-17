import { CONTENT_TYPES_PLURALIZED } from "../content/content-types-pluralized";
import { Slug } from "../content/slug";

import { ContentType } from "./content-types";

export function getContentUrlPath(contentType: ContentType, contentSlug: Slug) {
  const contentTypePluralized = CONTENT_TYPES_PLURALIZED[contentType];
  return `/${contentTypePluralized}/${contentSlug}`;
}
