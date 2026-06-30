import { Slug } from "../slug";

export interface MetaBase<TMetaExtensions extends object = object> {
  readonly slug: Slug;

  /**
   * Extends meta with additional fields only available at build time.
   */
  readonly extensions?: TMetaExtensions;
}
