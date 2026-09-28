import { Content } from "../content";
import { getContentLinkInfo } from "../content-link";
import { ContentMap } from "../content-map";
import { Slug } from "../slug";

import { ContentAnchorLinkAndInfo } from "./content-anchor-link-and-info";
import { ContentAnchorsMap } from "./content-anchors-map";

export type ContentsAnchorContentLinkInfos = Record<
  Slug /* Anchor Source Slug */,
  readonly ContentAnchorLinkAndInfo[] /* Anchor Destination Slug */
>;

export function reduceContentsAnchorLinkAndInfos(
  contents: readonly Content[],
  contentMap: ContentMap,
  contentAnchorsMap: ContentAnchorsMap,
) {
  const contentsAnchorLinkAndInfos: ContentsAnchorContentLinkInfos = {};
  for (const content of contents) {
    contentsAnchorLinkAndInfos[content.meta.slug] =
      reduceContentAnchorLinkAndInfos(content, contentMap, contentAnchorsMap);
  }
  return contentsAnchorLinkAndInfos;
}

export function reduceContentAnchorLinkAndInfos(
  content: Content,
  contentMap: ContentMap,
  contentAnchorsMap: ContentAnchorsMap,
) {
  const contentAnchors =
    contentAnchorsMap[content.type]?.[content.meta.slug] ?? [];

  const contentAnchorsMatchingContent = contentAnchors.filter(
    (contentAnchor) =>
      contentAnchor.anchorContentLink.type === content.type &&
      contentAnchor.anchorContentLink.slug === content.meta.slug,
  );

  const contentAnchorLinkAndInfos: ContentAnchorLinkAndInfo[] = [];

  for (const contentAnchor of contentAnchorsMatchingContent) {
    const contentLink = contentAnchor.containingContentLink;
    const contentLinkInfo = getContentLinkInfo(
      contentMap,
      contentAnchor.containingContentLink,
    );

    const contentAnchorLinkAndInfo = {
      ...contentAnchor,
      ...contentLink,
      ...contentLinkInfo,
    };

    contentAnchorLinkAndInfos.push(contentAnchorLinkAndInfo);
  }

  return contentAnchorLinkAndInfos;
}
