import { DateTimeString } from "../date-time";
import { PostTag } from "../post";
import { SocialLink } from "../social-link";

import { NoteSlug } from "./note-slug";
import { NoteSource } from "./note-source";

export interface NoteMeta {
  readonly slug: NoteSlug;
  readonly date: DateTimeString;
  readonly title?: string;

  readonly blurb: string;
  readonly shortBlurb?: string;

  readonly source: NoteSource;

  readonly socialLinks: readonly SocialLink[];
  readonly tags: readonly PostTag[];

  readonly commentCount?: number;
}
