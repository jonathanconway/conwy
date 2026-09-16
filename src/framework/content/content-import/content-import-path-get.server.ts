import { ContentLink } from "../content-link/content-link";
import { CONTENT_TYPE_LABELS_PLURAL } from "../content-type/content-type-labels-plural";
import { ContentType } from "../content-type/content-types";

export function getContentImportPath<
  TContentType extends ContentType = ContentType,
>({ slug, type }: ContentLink<TContentType>) {
  return `${getContentImportRootPath(type)}/${slug}`;
}

export function getContentImportRootPath(contentType: ContentType) {
  const contentTypePluralized = CONTENT_TYPE_LABELS_PLURAL[contentType];
  return `@/content/${contentTypePluralized}`;
}
