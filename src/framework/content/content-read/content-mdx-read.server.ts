import { readFileSync } from "fs";
import pluralize from "pluralize";

import { ContentType } from "../../content/content-type/content-types";
import { Slug } from "../slug";

/**
 * Reads content mdx files from the file system, allowing them to be accessed without the mdx loader.
 */
export function readContentMdx(
  contentType: ContentType,
  slug: Slug,
  mdxFilename = "content",
) {
  const contentMdFilePathName = `${process.cwd()}/src/content/${pluralize(contentType)}/${slug}/${mdxFilename}.mdx`;
  const contentMd = readFileSync(contentMdFilePathName).toString();

  return contentMd;
}
