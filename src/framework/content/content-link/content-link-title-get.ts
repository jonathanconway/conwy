import { sentenceCase } from "../../utils/strings";
import { Content } from "../content";
import { ContentAny } from "../content-any";
import { findImportedContent } from "../content-importing/content-find-imported";
import { ContentMap } from "../content-map";
import { ContentType, ContentTypes } from "../content-type";

import { ContentLink } from "./content-link";

type ContentLinkTitleGetterMap = {
  [key in Content["type"]]: ContentLinkTitleGetter<
    Content & { readonly type: key }
  >;
};

type ContentLinkTitleGetter<
  TContentItem extends Content & { readonly type: ContentType } = Content & {
    readonly type: ContentType;
  },
> = (content: TContentItem) => string;

const contentLinkTitleGetters: ContentLinkTitleGetterMap = {
  [ContentTypes.Article]: (content) => content.meta.title,
  [ContentTypes.Book]: (content) => content.meta.title,
  [ContentTypes.Checklist]: (content) => content.meta.title,
  [ContentTypes.Commentary]: (content) => content.meta.source.title ?? "",
  [ContentTypes.Community]: (content) => content.meta.title,
  [ContentTypes.Colleague]: (content) => content.fullName,
  [ContentTypes.Idea]: (content) => content.meta.title,
  [ContentTypes.Micro]: (content) => sentenceCase(content.meta.slug),
  [ContentTypes.Page]: (content) => content.meta.title,
  [ContentTypes.Project]: (content) => content.meta.title,
  [ContentTypes.Prompt]: (content) => content.meta.title,
  [ContentTypes.Quote]: (content) => sentenceCase(content.meta.slug),
  [ContentTypes.Study]: (content) => content.meta.title,
  [ContentTypes.Testimonial]: (content) => sentenceCase(content.meta.slug),
  [ContentTypes.Tool]: (content) => content.meta.title,
  [ContentTypes.Work]: (content) => content.meta.client,
};

export function getContentTitle(content: ContentAny) {
  const contentLinkTitleGetter = contentLinkTitleGetters[
    content.type as Content["type"]
  ] as unknown as ContentLinkTitleGetter<any>;
  return contentLinkTitleGetter(content);
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
  return getContentTitle(content);
}
