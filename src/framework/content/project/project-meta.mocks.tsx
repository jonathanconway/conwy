import { SocialLinkTypes } from "../social-link";

import { Project } from "./project";
import { ProjectMeta } from "./project-meta";

export function createProjectMock(): Project {
  return {
    type: "project",
    content: <></>,
    meta: {
      slug: "tailwindjs",
      title: "tailwindjs",
      blurb: `Tailwind classes as Javascript functions for intellisense and type safety.`,
      date: "2024-05-02",
      tags: ["software-development"],
      type: "project",
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
