import { Content } from "../content";
import { ContentType } from "../content-type/content-types";
import { MetaBase } from "../meta/meta-base";

import { ContentAnchor } from "./content-anchor";
import { ContentAnchorsMap } from "./content-anchors-map";

export function getContentAnchors<
  TType extends ContentType,
  TMeta extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
>(
  contentAnchorsMap: ContentAnchorsMap,
  content: Content<TType, TMeta, TMetaExtensions>,
) {
  const contentAnchorsMapType: ContentAnchorsMap[ContentType] =
    contentAnchorsMap[content.type]!;
  const contentAnchors: readonly ContentAnchor[] =
    contentAnchorsMapType[content.meta.slug] ?? [];

  return contentAnchors;
}
