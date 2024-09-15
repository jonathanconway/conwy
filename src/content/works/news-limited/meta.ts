import { SocialLinkTypes, WorkMeta } from "@/framework/client";

export const meta: WorkMeta = {
  client: "News Limited",
  blurbShort:
    "Developed the iPad app for The Australian and added various features to the Desktop website.",
  startDate: "2011-11-01",
  endDate: "2012-02-20",
  jobTitle: "Javascript Developer",
  mainImage: "thumbnail.png",
  feedbacks: [],
  images: [],
  slug: "news-limited",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "HTML",
      items: [],
    },
    {
      categoryName: "CSS",
      items: [],
    },
    {
      categoryName: "Javascript",
      items: [],
    },
    {
      categoryName: "FatWire CMS",
      items: [],
    },
  ],
  projects: [
    {
      title: "The Australian iPad app",
    },
    {
      title: "The Australian Top 50 section",
    },
  ],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "http://theaustralian.com.au",
      title: "TheAustralian website",
    },
    // todo: add top 50 from archive
  ],
};
