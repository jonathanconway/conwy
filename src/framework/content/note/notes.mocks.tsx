import { influenceBook } from "@/content/books/influence";
import { mentalToughnessBook } from "@/content/books/mental-toughness";

import { Note } from "./note";

export function createNoteMock(): Note {
  return {
    type: "note",
    content: <></>,
    meta: {
      title: "Front end observability",
      blurb: `Observing the state of front end applications running in production can boost troubleshooting / debugging.`,
      date: "2023-09-02",
      slug: "influence",
      source: influenceBook.meta,
      socialLinks: [],
      tags: [],
    },
  };
}

export function createNoteMock2(): Note {
  return {
    type: "note",
    content: <></>,
    meta: {
      title: "Streamlining code reviews",
      blurb:
        "Having a good code review process can make code reviews easier, more enjoyable and higher quality",
      date: "2023-08-06",
      slug: "mental-toughness",
      source: mentalToughnessBook.meta,
      socialLinks: [],
      tags: [],
    },
  };
}

export function createNotesMock() {
  return [createNoteMock(), createNoteMock2()];
}
