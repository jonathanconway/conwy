import { MetaBase } from "../../content/meta/meta-base";
import { ContentBase } from "../content-base";
import { ContentType } from "../content-type/content-types";
import { Slug } from "../slug";

export interface ContentLink<TContentType extends ContentType = ContentType> {
  readonly type: TContentType;
  readonly slug: Slug;
}

export function createContentLink<
  TContentType extends ContentType = ContentType,
>(type: TContentType, slug: Slug): ContentLink<TContentType> {
  return {
    type,
    slug,
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
