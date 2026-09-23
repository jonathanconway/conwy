import { createBookMock1, createBookMock2 } from "../book/book.mocks";
import { ContentTypes } from "../content-type";

import { Commentary } from "./commentary";

export function createCommentaryMock(): Commentary {
  return {
    type: "commentary",
    content: <></>,
    meta: {
      blurb: `Observing the state of front end applications running in production can boost troubleshooting / debugging.`,
      date: "2023-09-02",
      slug: "influence",
      source: { ...createBookMock1().meta, type: ContentTypes.Book },
      socialLinks: [],
      tags: [],
    },
  };
}

export function createCommentaryMock2(): Commentary {
  return {
    type: "commentary",
    content: <></>,
    meta: {
      blurb:
        "Having a good code review process can make code reviews easier, more enjoyable and higher quality",
      date: "2023-08-06",
      slug: "mental-toughness",
      source: { ...createBookMock2().meta, type: ContentTypes.Book },
      socialLinks: [],
      tags: [],
    },
  };
}

export function createNotesMock() {
  return [createCommentaryMock(), createCommentaryMock2()];
}
