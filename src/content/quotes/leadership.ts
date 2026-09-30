import { ContentTypes, Quote } from "@/framework/client";

export const leadershipQuote: Quote = {
  type: ContentTypes.Quote,
  text: "Leadership is the art of getting someone else to do something you want done because they want to do it.",
  meta: {
    author: {
      title: "Dwight Eisenhower",
    },
    slug: "leadership",
  },
};
