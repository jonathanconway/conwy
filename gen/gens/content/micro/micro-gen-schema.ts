import { PostTags, assert, generateSlugFromText } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { MicroGenParams } from "./micro-gen-params";

export const microGenSchema: GenSchema<MicroGenParams> = {
  name: "micro",
  fields: {
    content: {
      type: GenSchemaFieldTypes.TextMultiLine,
      required: true,
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => {
        assert(valuesSoFar.content);
        return generateSlugFromText(valuesSoFar.content);
      },
    },

    mainLink: {
      type: GenSchemaFieldTypes.Text,
    },
    socialLinkUrls: {
      type: GenSchemaFieldTypes.TextList,
      label: "Social Link URL(s)",
    },

    tags: {
      type: GenSchemaFieldTypes.MultiSelect,
      options: Object.values(PostTags),
    },
  },
};
