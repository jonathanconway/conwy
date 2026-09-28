import { ContentBase } from "../content-base";
import { ContentType } from "../content-type/content-types";
import { MetaBase } from "../meta/meta-base";

import { getContentFolders } from "./content-folders-get.server";
import { importContent } from "./content-import";

/**
 * Imports content files of a given type from the file system, allowing them to be accessed without the mdx loader.
 */
export async function importContents<
  TType extends ContentType,
  TMeta extends MetaBase,
  TContent extends ContentBase<TType, TMeta>,
>(type: ContentType): Promise<readonly TContent[]> {
  const contentFolders = getContentFolders(type);

  return await Promise.all(
    contentFolders.map(
      async (slug) => await importContent<TType, TMeta, TContent>(type, slug),
    ),
  );
}
