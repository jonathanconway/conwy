import { influenceBook } from "@/content/books/influence";
import { mentalToughnessBook } from "@/content/books/mental-toughness";

import { NoteMeta } from "./note-meta";

export function createNoteMetaMock(): NoteMeta {
  return {
    title: "Front end observability",
    blurb: `Observing the state of front end applications running in production can boost troubleshooting / debugging.`,
    date: "2023-09-02",
    slug: "influence",
    type: "note",
    source: influenceBook.meta,
    socialLinks: [],
    tags: [],
  };
}

export function createNoteMetaMock2(): NoteMeta {
  return {
    title: "Streamlining code reviews",
    blurb:
      "Having a good code review process can make code reviews easier, more enjoyable and higher quality",
    date: "2023-08-06",
    slug: "mental-toughness",
    type: "note",
    source: mentalToughnessBook.meta,
    socialLinks: [],
    tags: [],
  };
}
