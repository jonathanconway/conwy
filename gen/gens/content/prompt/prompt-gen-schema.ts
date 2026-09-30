import { assert, generateSlugFromText } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { PromptGenParams } from "./prompt-gen-params";

export const promptGenSchema: GenSchema<PromptGenParams> = {
  name: "micro",
  fields: {
    title: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    content: {
      type: GenSchemaFieldTypes.TextMultiLine,
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => {
        assert(valuesSoFar.title);
        return generateSlugFromText(valuesSoFar.title);
      },
    },
  },
};
