import { ContentTypes, Quote } from "@/framework/client";

export const chaosQuote: Quote = {
  type: ContentTypes.Quote,
  text: "Through the chaos, we can create our own order.",
  meta: {
    author: {
      title: "Pema Chödrön",
    },
    slug: "chaos",
  },
};
