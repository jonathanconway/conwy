import { ContentTypes } from "../content-type";

import { Idea } from "./idea";

export function createIdeaMock(): Idea {
  return {
    type: ContentTypes.Idea,
    meta: {
      slug: "mock-idea",
      title: "Mock idea`",
    },
    content: <>Content</>,
    blurb: <>Blurb</>,
  };
}
