import { kebabCase } from "lodash";

import { PostTags } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { ArticleGenParams } from "./article-gen-params";

export const articleGenSchema: GenSchema<ArticleGenParams> = {
  name: "article",
  fields: {
    title: {
      type: GenSchemaFieldTypes.Text,
    },
    category: {
      type: GenSchemaFieldTypes.Select,
      options: Object.values(PostTags),
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => kebabCase(valuesSoFar.title ?? ""),
    },
  },
};
