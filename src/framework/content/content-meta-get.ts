import { ContentAny } from "../content/content";
import { ContentType } from "../content/content-types";
import { Slug } from "../content/slug";

export function getContentMeta(
  contents: Record<string, ContentAny>,
  contentType: ContentType,
  slug: Slug,
) {
  const contentsValues = Object.values(contents) as readonly ContentAny[];
  const contentsMetas = contentsValues
    .filter((content) => content.type === contentType)
    .map((content) => content.meta);
  const contentMeta = contentsMetas.find(
    (contentMeta) => contentMeta.slug === slug,
  );
  return contentMeta;
}
