import { findImportedContent } from "../content-importing/content-find-imported";
import { ContentMap } from "../content-map";

import { ContentLink } from "./content-link";
import { getContentAuthors } from "./content-link-authors-get";
import { ContentLinkInfo } from "./content-link-info";
import { getContentTitle } from "./content-link-title-get";

export function getContentLinkInfo(
  contentMap: ContentMap,
  contentLink: ContentLink,
): ContentLinkInfo {
  const content = findImportedContent(
    contentMap,
    contentLink.type,
    contentLink.slug,
  );
  const [title, authors] = [
    getContentTitle(contentMap, content),
    getContentAuthors(contentMap, content),
  ];
  return {
    title,
    authors,
  };
}

export function getContentLinkInfos(
  contentMap: ContentMap,
  contentLinks: readonly ContentLink[],
): readonly ContentLinkInfo[] {
  return contentLinks.map((contentLink) =>
    getContentLinkInfo(contentMap, contentLink),
  );
}
