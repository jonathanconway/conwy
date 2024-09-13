import { ArticleMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Three tests for accessibility",
  blurb:
    "Here I offer three simple tests you can run on all of your web pages or application screens right now, to assess their accessibility.",
  shortBlurb:
    "Three simple tests you can run on your applications to assess their accessibility.",
  date: "2023-07-02",
  slug: "three-tests-accessibility",
  type: "article",
  tags: ["software-development"],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://web.archive.org/web/20180313174506/https://www.dta.gov.au/blog/Accessibility-going-beyond-the-guidelines/",
      title: "Published article",
    },
    {
      type: SocialLinkTypes.LinkedIn,
      url: "https://www.linkedin.com/pulse/three-tests-accessibility-jonathan-conway-akbac/",
    },
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/three-tests-for-accessibility-1hep",
    },
    {
      type: SocialLinkTypes.YouTube,
      url: "https://www.youtube.com/watch?v=86PqPOQx3Co",
    },
  ],
};
