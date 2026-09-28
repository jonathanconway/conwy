import { ContentBase } from "../content-base";
import { ContentType } from "../content-type";
import { MetaBase } from "../meta";
import { Slug } from "../slug";

import { getContentImportPath } from "./content-import-path-get.server";

/**
 * Imports an individual content file from the file system, allowing it to be accessed without the mdx loader.
 */
export async function importContent<
  TType extends ContentType,
  TMeta extends MetaBase,
  TContent extends ContentBase<TType, TMeta>,
>(type: ContentType, slug: Slug): Promise<TContent> {
  return import(`${getContentImportPath({ type, slug })}/index`);
}
