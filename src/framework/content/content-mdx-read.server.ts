import { readFileSync } from "fs";
import pluralize from "pluralize";

import { ContentType, Slug } from "../client";

export function readContentMdx(
  contentType: ContentType,
  slug: Slug,
  filename = "content",
) {
  const contentMdFilePathName = `${process.cwd()}/src/content/${pluralize(contentType)}/${slug}/${filename}.mdx`;
  const contentMd = readFileSync(contentMdFilePathName).toString();

  return contentMd;
}
