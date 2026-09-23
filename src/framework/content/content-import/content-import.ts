import { Content } from "../content";
import { ContentType } from "../content-type/content-types";
import { MetaBase } from "../meta/meta-base";

import { getContentFolders } from "./content-folders-get";
import { getContentImportPath } from "./content-import-path-get.server";

/**
 * Imports content files from the file system, allowing them to be accessed without the mdx loader.
 */
export async function importContents<
  TType extends ContentType,
  TMeta extends MetaBase,
  TContent extends Content<TType, TMeta>,
>(type: ContentType): Promise<readonly TContent[]> {
  const contentFolders = getContentFolders(type);

  return await Promise.all(
    contentFolders.map(
      async (slug) =>
        await import(`${getContentImportPath({ type, slug })}/index`),
    ),
  );
}
