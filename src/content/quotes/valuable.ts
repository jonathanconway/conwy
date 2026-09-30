import { ContentTypes, Quote } from "@/framework/client";

export const valuableQuote: Quote = {
  type: ContentTypes.Quote,
  text: "Strive not to be a success, but rather to be of value.",
  meta: {
    author: {
      title: "Albert Einstein",
    },
    slug: "valuable",
  },
};
