import { assert, generateSlugFromText } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";
import { UrlValidator } from "@/framework/validation";

import { ToolGenParams } from "./tool-gen-params";

export const toolGenSchema: GenSchema<ToolGenParams> = {
  name: "tool",
  fields: {
    title: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => {
        assert(valuesSoFar.title);
        return generateSlugFromText(valuesSoFar.title);
      },
    },
    category: {
      type: GenSchemaFieldTypes.Text,
    },
    url: {
      type: GenSchemaFieldTypes.Text,
      validators: [new UrlValidator<ToolGenParams, ToolGenParams["url"]>()],
    },
    operatingSystems: {
      options: ["Windows", "Mac", "Linux"],
      type: GenSchemaFieldTypes.MultiSelect,
    },
    mainImage: {
      type: GenSchemaFieldTypes.Text,
    },
    description: {
      type: GenSchemaFieldTypes.Text,
    },
    usage: {
      type: GenSchemaFieldTypes.Text,
    },
    section: {
      type: GenSchemaFieldTypes.Text,
    },
  },
};
