import { Content } from "../content/content";
import { ContentType } from "../content/content-types";
import { Slug } from "../content/slug";

import { MetaBase } from "./meta/meta-base";

export function getContentMeta(
  contents: Record<string, object>,
  contentType: ContentType,
  slug: Slug,
) {
  const contentsValues = Object.values(contents) as readonly Content<
    ContentType,
    MetaBase<object>,
    object
  >[];
  const contentsMetas = contentsValues
    .filter((content) => content.type === contentType)
    .map((content) => content.meta);
  const contentMeta = contentsMetas.find(
    (contentMeta) => contentMeta.slug === slug,
  );
  return contentMeta;
}
