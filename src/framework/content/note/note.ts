import { MDXContent } from "mdx/types";

import { NoteMeta } from "./note-meta";

export interface Note {
  readonly meta: NoteMeta;
  readonly content: MDXContent;
}
