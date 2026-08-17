import { Content } from "../content";
import { ContentType } from "../content-types";
import { MetaBase } from "../meta";

import { ContentAnchorsMap } from "./content-anchors-map";

export function getAnchors<
  TType extends ContentType,
  TMeta extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
>(
  contentAnchorsByContentTypeAndContentSlug: ContentAnchorsMap,
  content: Content<TType, TMeta, TMetaExtensions>,
) {
  const contentAnchors =
    contentAnchorsByContentTypeAndContentSlug[content.type][
      content.meta.slug
    ] ?? [];
  return contentAnchors;
}
