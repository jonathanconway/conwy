import { ContentTypes, Quote } from "@/framework/client";

export const eatQuote: Quote = {
  type: ContentTypes.Quote,
  text: "Eat food. Not too much. Mostly plants.",
  meta: {
    author: {
      title: "Michael Pollan",
      url: "https://en.wikipedia.org/wiki/Michael_Pollan",
    },
    slug: "eat",
  },
};
