import { SocialLinkTypes, WorkMeta } from "@/framework";

export const meta: WorkMeta = {
  title: "News Limited",
  client: "News Limited",
  blurbShort:
    "Developed the iPad app for The Australian and added various features to the Desktop website.",
  startDate: "2011-11-01",
  endDate: "2012-02-20",
  jobTitle: "Javascript Developer",
  mainImage: {
    src: "/images/works/news-limited/main.png",
  },
  feedbacks: [],
  images: [],
  slug: "news-limited",
  tags: [],
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
    {
      type: SocialLinkTypes.Website,
      url: "https://web.archive.org/web/20120206142017/http://www.theaustralian.com.au/top50",
      title: "TheAustralian Top50 web page (Archive)",
    },
  ],
};
