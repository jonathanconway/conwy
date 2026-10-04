import { PostTags, assert, generateSlugFromText } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { MicroGenParams } from "./micro-gen-params";

export const microGenSchema: GenSchema<MicroGenParams> = {
  name: "micro",
  fields: {
    shortBlurb: {
      type: GenSchemaFieldTypes.Text,
    },
    content: {
      type: GenSchemaFieldTypes.TextMultiLine,
      required: true,
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => {
        const shortBlurbOrContent =
          valuesSoFar.shortBlurb ?? valuesSoFar.content;
        assert(shortBlurbOrContent);
        return generateSlugFromText(shortBlurbOrContent);
      },
    },

    mainLink: {
      type: GenSchemaFieldTypes.Text,
    },
    socialLinkUrls: {
      type: GenSchemaFieldTypes.TextList,
      label: "Social Link URL(s)",
    },
    discussionLinkUrls: {
      type: GenSchemaFieldTypes.TextList,
      label: "Discussion Link URL(s)",
    },

    tags: {
      type: GenSchemaFieldTypes.MultiSelect,
      options: Object.values(PostTags),
    },

    isPinned: {
      type: GenSchemaFieldTypes.YesNo,
      default: true,
    },
  },
};
