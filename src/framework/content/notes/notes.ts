import { orderBy } from "lodash";

import { Note } from "./note";
import { NoteMeta } from "./note-meta";

export function sortNoteMetas(noteMetas: readonly NoteMeta[]) {
  return orderBy(noteMetas, "date", "desc");
}

export function getNoteMetas(notes: Record<string, Note>) {
  return sortNoteMetas(Object.values(notes).map((note) => note.meta));
}
