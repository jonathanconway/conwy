import { sentenceCase } from "../../utils/strings";
import { Content } from "../content";
import { ContentAny } from "../content-any";
import { findImportedContent } from "../content-importing/content-find-imported";
import { ContentMap } from "../content-map";
import { ContentTypes } from "../content-type";

import { ContentLink } from "./content-link";
import { ContentLinkGetterMap } from "./content-link-getter-map";

type ContentLinkTitleGetterMap = ContentLinkGetterMap<string>;

const contentLinkTitleGetters: ContentLinkTitleGetterMap = {
  [ContentTypes.Article]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Book]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Checklist]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Commentary]: (contentMap, content) =>
    getContentLinkTitle(contentMap, content.meta.source),
  [ContentTypes.Community]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Colleague]: (_contentMap, content) => content.fullName,
  [ContentTypes.Idea]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Micro]: (_contentMap, content) =>
    sentenceCase(content.meta.slug),
  [ContentTypes.Page]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Project]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Prompt]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Quote]: (_contentMap, content) =>
    sentenceCase(content.meta.slug),
  [ContentTypes.Study]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Testimonial]: (_contentMap, content) =>
    sentenceCase(content.meta.slug),
  [ContentTypes.Tool]: (_contentMap, content) => content.meta.title,
  [ContentTypes.Work]: (_contentMap, content) => content.meta.client,
};

export function getContentTitle(contentMap: ContentMap, content: ContentAny) {
  const contentLinkTitleGetter = contentLinkTitleGetters[
    content.type as Content["type"]
  ] as any;
  return contentLinkTitleGetter(contentMap, content);
}

export function getContentLinkTitle(
  contentMap: ContentMap,
  contentLink: ContentLink,
) {
  const content = findImportedContent(
    contentMap,
    contentLink.type,
    contentLink.slug,
  );
  return getContentTitle(contentMap, content);
}
