import { ContentTypes, Quote } from "@/framework";

export const cookQuote: Quote = {
  type: ContentTypes.Quote,
  text: "A good cook changes his knife once a year — because he cuts. A mediocre cook changes his knife once a month — because he hacks.",
  meta: {
    author: {
      title: "Zhuang Zhou",
    },
    slug: "cook",
    source: {
      url: "https://en.wikipedia.org/wiki/Zhuangzi_(book)",
      title: "Zhuangzi",
    },
  },
};
