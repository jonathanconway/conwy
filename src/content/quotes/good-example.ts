import { ContentTypes, Quote } from "@/framework/client";

export const goodExampleQuote: Quote = {
  type: ContentTypes.Quote,
  text: "Few things are harder to put up with than the annoyance of a good example.",
  meta: {
    author: {
      title: "Mark Twain",
      url: "https://en.wikipedia.org/wiki/Mark_Twain",
    },
    slug: "good-example",
  },
};
