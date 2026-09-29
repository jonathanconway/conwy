import { kebabCase, trim } from "lodash";

import { isNotNil } from "../utils";

export function generateSlugFromText(text: string) {
  return kebabCase(
    text
      .split(" ")
      .map(trim)
      .filter(isNotNil)
      .filter(checkIsNotConjunctionWord)
      .slice(5)
      .join(" "),
  );
}

function checkIsNotConjunctionWord(word: string) {
  return ![
    "after",
    "all",
    "also",
    "although",
    "and",
    "as",
    "because",
    "before",
    "both…and",
    "but",
    "by",
    "case",
    "either…or",
    "even",
    "event",
    "far",
    "for",
    "if",
    "in",
    "inasmuch",
    "insofar",
    "it",
    "just",
    "lest",
    "long",
    "much",
    "neither…nor",
    "no",
    "nor",
    "not",
    "now",
    "of",
    "once",
    "only…but",
    "only",
    "or",
    "order",
    "provided",
    "rather",
    "seeing",
    "since",
    "so",
    "soon",
    "sooner…than",
    "supposing",
    "than",
    "that",
    "the",
    "though",
    "time",
    "unless",
    "until",
    "well",
    "when",
    "whenever",
    "where",
    "wherever",
    "whether…or",
    "whether",
    "while",
    "yet",
  ].includes(word.trim().toLowerCase());
}
