import { ContentTypes, Quote } from "@/framework/client";

export const feelQuote: Quote = {
  type: ContentTypes.Quote,
  text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  meta: {
    author: {
      title: "Maya Angelou",
    },
    slug: "feel",
  },
};
