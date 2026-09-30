import { ContentTypes, Quote } from "@/framework/client";

export const longQuote: Quote = {
  type: ContentTypes.Quote,
  text: "The long term is made up of many short terms.",
  meta: {
    author: {
      title: "Ronnie Coleman",
    },
    slug: "long",
  },
};
