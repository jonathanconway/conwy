import { ContentType, Slug, Url } from "../content";

/**
 * An item of content that is indexed and searchable.
 */
export interface SearchRecord {
  readonly contentSlug: Slug;
  readonly contentType: ContentType;
  readonly contentUrl: Url;
  readonly title: string;
}
