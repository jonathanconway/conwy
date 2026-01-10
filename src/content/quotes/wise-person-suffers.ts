import { Quote } from "@/framework/client";

import { theHeartOfTheBuddhasTeachingBook } from "../books/the-heart-of-the-buddhas-teaching";

export const wisePersonSuffersQuote: Quote = {
  type: "quote",
  text: "When a wise person suffers, she asks herself, 'What can I do to be free from this suffering? Who can help me? What have I done to free myself from this suffering?'",
  meta: {
    author: {
      title: "Thích Nhất Hạnh",
      url: "https://en.wikipedia.org/wiki/Th%C3%ADch_Nh%E1%BA%A5t_H%E1%BA%A1nh",
    },
    source: theHeartOfTheBuddhasTeachingBook.meta,
    slug: "wise-person-suffers",
  },
};
