import { ContentType } from "../content-type/content-types";
import { MetaBase } from "../meta/meta-base";

import { getContentFolders } from "./content-folders-get";
import { getContentImportPath } from "./content-import-path-get.server";

/**
 * Imports content meta files from the file system, allowing them to be accessed without the mdx loader.
 */
export async function importContentMetas<T extends MetaBase>(
  type: ContentType,
): Promise<readonly T[]> {
  const contentFolders = getContentFolders(type);

  return await Promise.all(
    contentFolders.map(
      async (slug) =>
        (await import(`${getContentImportPath({ type, slug })}/meta`)).meta,
    ),
  );
}
