import { Idea } from "./idea";

export function createIdeaMock(): Idea {
  return {
    type: "idea",
    slug: "mock-idea",
    meta: {
      title: "Mock idea`",
    },
    content: <>Content</>,
    blurb: <>Blurb</>,
  };
}
