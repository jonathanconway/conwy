import { ContentTypes, Quote } from "@/framework/client";

export const freedomQuote: Quote = {
  type: ContentTypes.Quote,
  text: "I began to develop a system in which freedom was possible, and I conquered my own freedom",
  meta: {
    author: {
      title: "Pierre Boulez",
      url: "https://en.wikipedia.org/wiki/Pierre_Boulez",
    },
    source: {
      title: "Pierre Boulez | Universal Edition",
      url: "https://www.universaledition.com/en/Contacts/Pierre-Boulez/",
    },
    slug: "freedom",
  },
};
