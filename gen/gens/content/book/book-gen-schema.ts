import { kebabCase } from "lodash";

import { BookCategories } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { BookGenParams } from "./book-gen-params";

export const bookGenSchema: GenSchema<BookGenParams> = {
  name: "book",
  fields: {
    title: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    authors: {
      type: GenSchemaFieldTypes.TextList,
      required: true,
    },
    category: {
      type: GenSchemaFieldTypes.Select,
      options: Object.values(BookCategories),
    },
    url: {
      type: GenSchemaFieldTypes.Text,
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => kebabCase(valuesSoFar.title ?? ""),
    },
  },
};
