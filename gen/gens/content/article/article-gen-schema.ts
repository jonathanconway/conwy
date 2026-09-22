import { kebabCase } from "lodash";

import { PostTags } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { ArticleGenParams } from "./article-gen-params";

export const articleGenSchema: GenSchema<ArticleGenParams> = {
  name: "article",
  fields: {
    title: {
      type: GenSchemaFieldTypes.Text,
      label: "Title",
    },
    category: {
      type: GenSchemaFieldTypes.Select,
      label: "Category",
      options: Object.values(PostTags),
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      label: "Slug",
      default: ({ valuesSoFar }) => kebabCase(valuesSoFar.title ?? ""),
    },
  },
};
