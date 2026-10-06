import { kebabCase } from "lodash";

import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { IdeaGenParams } from "./idea-gen-params";

export const ideaGenSchema: GenSchema<IdeaGenParams> = {
  name: "idea",
  fields: {
    title: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => kebabCase(valuesSoFar.title ?? ""),
    },
    blurb: {
      type: GenSchemaFieldTypes.TextMultiLine,
    },
    content: {
      type: GenSchemaFieldTypes.TextMultiLine,
    },
  },
};
