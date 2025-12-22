import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "How I built my designerly CV",
  blurb:
    "Using LibreOffice with embedded open-source fonts to create a nicely formatted and portable CV",
  date: "2025-12-19",
  slug: "designerly-cv",
  type: "article",
  tags: [PostTags.Design],
  mainImage: {
    src: "/images/articles/designerly-cv/main.jpg",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.LinkedIn,
      url: "https://www.linkedin.com/pulse/how-i-built-my-designerly-cv-jonathan-conway-nxzrc",
    },
  ],
  discussionLinks: [],
  isPinned: true,
};
