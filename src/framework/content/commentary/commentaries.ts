import { orderBy } from "lodash";

import { Commentary } from "./commentary";
import { CommentaryMeta } from "./commentary-meta";

export function sortCommentaryMetas(
  commentaryMetas: readonly CommentaryMeta[],
) {
  return orderBy(commentaryMetas, "date", "desc");
}

export function getCommentaryMetas(commentaries: Record<string, Commentary>) {
  return sortCommentaryMetas(
    Object.values(commentaries).map((note) => note.meta),
  );
}
