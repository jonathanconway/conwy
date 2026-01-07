import { Community, CommunityCategories } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const rationalReminderCommunity: Community = {
  type: "community",
  meta: {
    slug: "rational-reminder",
    title: "Rational Reminder",
    url: "https://community.rationalreminder.ca",
    mainImage: {
      src: "/images/communities/rational-reminder.png",
    },
    category: CommunityCategories.Investing,
    profilePosts: [],
    profileLink: {
      url: "https://community.rationalreminder.ca/u/conwy/summary",
      title: "conwy",
    },
  },
  blurbShort: <BlurbShort />,
};
