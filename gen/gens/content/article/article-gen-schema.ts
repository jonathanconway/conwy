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
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => kebabCase(valuesSoFar.title ?? ""),
    },

    tags: {
      type: GenSchemaFieldTypes.MultiSelect,
      options: Object.values(PostTags),
    },
  },
};
