import { cwd } from "process";

import { CONTENT_TYPE_LABELS_PLURAL } from "../content-type/content-type-labels-plural";
import { ContentType } from "../content-type/content-types";

export function getContentFileRootPath(contentType: ContentType) {
  const contentTypePluralized = CONTENT_TYPE_LABELS_PLURAL[contentType];
  return `${cwd()}/src/content/${contentTypePluralized}`;
}
