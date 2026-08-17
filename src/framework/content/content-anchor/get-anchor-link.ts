import { ContentType } from "../content-types";
import { getContentUrlPath } from "../content-url-path";
import { Slug } from "../slug";

export function getAnchorLink(
  contentType: string,
  contentSlug: Slug,
  anchorType: ContentType,
  anchorSlug: Slug,
) {
  return `${getContentUrlPath(contentType, contentSlug)}#content--${anchorType}--${anchorSlug}`;
}
