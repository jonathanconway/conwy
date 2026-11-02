import { MetaBase } from "../../content/meta/meta-base";
import { ContentBase } from "../content-base";
import { ContentMap } from "../content-map";
import { ContentType } from "../content-type/content-types";
import { Slug } from "../slug";

import { getContentTitle } from "./content-link-title-get";

export interface ContentLink<TContentType extends ContentType = ContentType> {
  readonly type: TContentType;
  readonly slug: Slug;
  readonly title?: string;
}

export function createContentLink<
  TContentType extends ContentType = ContentType,
>(type: TContentType, slug: Slug, title?: string): ContentLink<TContentType> {
  return {
    type,
    slug,
    title,
  };
}

export function getContentLink<
  TContentType extends ContentType = ContentType,
  TContentMeta extends MetaBase = MetaBase,
>(content: ContentBase<TContentType, TContentMeta>): ContentLink<TContentType> {
  const type = content.type;
  const slug = content.meta.slug;

  return {
    type,
    slug,
  };
}

export function getContentLinkWithTitle<
  TContentType extends ContentType = ContentType,
  TContentMeta extends MetaBase = MetaBase,
>(content: ContentBase<TContentType, TContentMeta>): ContentLink<TContentType> {
  const type = content.type;
  const slug = content.meta.slug;
  const title = getContentTitle(content);

  return {
    type,
    slug,
    title,
  };
}
