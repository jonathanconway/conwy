import { ContentTypes, Quote } from "@/framework/client";

export const natureQuestioningQuote: Quote = {
  type: ContentTypes.Quote,
  text: "What we observe is not nature itself, but nature exposed to our method of questioning.",
  meta: {
    author: {
      title: "Werner Heisenberg",
      url: "https://en.wikipedia.org/wiki/Werner_Heisenberg",
    },
    slug: "nature-questioning",
  },
};
