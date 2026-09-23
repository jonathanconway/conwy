import { lstatSync, readdirSync } from "fs";

import { getContentFileRootPath } from "../content-read/content-file-path-get.server";
import { ContentType } from "../content-type";

export function getContentFolders(contentType: ContentType) {
  const contentFileRootPath = getContentFileRootPath(contentType);
  const contentFilePaths = readdirSync(contentFileRootPath);
  const contentFilePathsValid = contentFilePaths.filter((contentFolder) =>
    lstatSync(`${contentFileRootPath}/${contentFolder}`).isDirectory(),
  );
  return contentFilePathsValid;
}
