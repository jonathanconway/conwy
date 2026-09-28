import { noopUndefined } from "@/framework/utils";

import { Content } from "../content";
import { ContentAny } from "../content-any";
import { ContentMap } from "../content-map";
import { ContentTypes } from "../content-type";

import { ContentLinkGetterMap } from "./content-link-getter-map";

type ContentLinkTitleGetterMap = ContentLinkGetterMap<
  readonly string[] | undefined
>;

const contentLinkAuthorsGetters: ContentLinkTitleGetterMap = {
  [ContentTypes.Article]: noopUndefined,
  [ContentTypes.Book]: (_contentMap, content) => content.meta.authors,
  [ContentTypes.Checklist]: noopUndefined,
  [ContentTypes.Commentary]: noopUndefined,
  [ContentTypes.Community]: noopUndefined,
  [ContentTypes.Colleague]: noopUndefined,
  [ContentTypes.Idea]: noopUndefined,
  [ContentTypes.Micro]: noopUndefined,
  [ContentTypes.Page]: noopUndefined,
  [ContentTypes.Project]: noopUndefined,
  [ContentTypes.Prompt]: noopUndefined,
  [ContentTypes.Quote]: noopUndefined,
  [ContentTypes.Study]: noopUndefined,
  [ContentTypes.Testimonial]: noopUndefined,
  [ContentTypes.Tool]: noopUndefined,
  [ContentTypes.Work]: noopUndefined,
};

export function getContentAuthors(contentMap: ContentMap, content: ContentAny) {
  const contentLinkAuthorGetter = contentLinkAuthorsGetters[
    content.type as Content["type"]
  ] as any;
  return contentLinkAuthorGetter(contentMap, content);
}
