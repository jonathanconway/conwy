import { PostMetaBase } from "../post/post-meta-base";
import { Slug } from "../slug";

import { NoteSource } from "./note-source";

export interface NoteMeta extends PostMetaBase {
  readonly type: "note";
  readonly source: NoteSource;
  readonly slug: Slug;
  readonly commentCount?: number;
}
