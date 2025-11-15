import { PostMetaBase } from "../post/post-meta-base";

import { NoteSlug } from "./note-slug";
import { NoteSource } from "./note-source";

export interface NoteMeta extends PostMetaBase {
  readonly type: "note";
  readonly slug: NoteSlug;
  readonly source: NoteSource;
  readonly commentCount?: number;
}
