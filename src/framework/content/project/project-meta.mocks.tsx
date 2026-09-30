import { ContentTypes } from "../content-type";
import { SocialLinkTypes } from "../social-link";

import { Project } from "./project";

export function createProjectMock(): Project {
  return {
    type: ContentTypes.Project,
    content: <></>,
    meta: {
      slug: "tailwindjs",
      title: "tailwindjs",
      blurb: `Tailwind classes as Javascript functions for intellisense and type safety.`,
      date: "2024-05-02",
      tags: ["software-development"],
      subType: "library",
      socialLinks: [
        {
          type: SocialLinkTypes.LinkedIn,
          url: "http://github.com/jonathanconway/tailwindjs",
        },
      ],
      mainImage: {
        src: "/images/projects/tailwindjs/main.svg",
      },
      techs: [],
      platforms: [],
      images: [],
    },
  };
}
