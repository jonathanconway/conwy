import { PostTags } from "../post";
import { SocialLinkTypes } from "../social-link";

import { Article } from "./article";

export function createArticleMock(): Article {
  return {
    type: "article",
    content: <></>,
    meta: {
      slug: "front-end-observability",
      title: "Front end observability",
      blurb: `Observing the state of front end applications running in production can boost troubleshooting / debugging.`,
      date: "2023-09-02",
      tags: [PostTags.SoftwareDevelopment],
      type: "article",
      socialLinks: [
        {
          type: SocialLinkTypes.LinkedIn,
          url: "https://linkedin.com/in/jonathanconway",
        },
        {
          type: SocialLinkTypes.Github,
          url: "https://linkedin.com/in/jonathanconway",
        },
      ],
      discussionLinks: [
        {
          type: SocialLinkTypes.Dev,
          url: "https://dev.to/conw_y/towards-zero-bugs-1bop#comments",
          commentCount: 25,
          likeCount: 207,
        },
      ],
    },
  };
}

export function createArticleMock2(): Article {
  return {
    type: "article",
    content: <></>,
    meta: {
      slug: "streamlining-code-reviews",
      title: "Streamlining code reviews",
      blurb:
        "Having a good code review process can make code reviews easier, more enjoyable and higher quality",
      date: "2023-08-06",
      type: "article",
      tags: [PostTags.SoftwareDevelopment, PostTags.Design],
      socialLinks: [
        {
          type: SocialLinkTypes.LinkedIn,
          url: "https://www.linkedin.com/pulse/streamlining-code-reviews-jonathan-conway",
        },
      ],
      discussionLinks: [],
    },
  };
}

export function createArticlesMock() {
  return [createArticleMock(), createArticleMock2()];
}
