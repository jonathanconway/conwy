import { Idea } from "./idea";

export function createIdeaMock(): Idea {
  return {
    type: "idea",
    meta: {
      slug: "mock-idea",
      title: "Mock idea`",
    },
    content: <>Content</>,
    blurb: <>Blurb</>,
  };
}
