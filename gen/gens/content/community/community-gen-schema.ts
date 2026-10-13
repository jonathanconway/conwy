import { kebabCase } from "lodash";

import { CommunityCategories } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { CommunityGenParams } from "./community-gen-params";

export const communityGenSchema: GenSchema<CommunityGenParams> = {
  name: "book",
  fields: {
    title: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => kebabCase(valuesSoFar.title ?? ""),
    },
    shortBlurb: {
      type: GenSchemaFieldTypes.TextMultiLine,
    },
    url: {
      type: GenSchemaFieldTypes.Text,
    },
    category: {
      type: GenSchemaFieldTypes.Select,
      options: Object.values(CommunityCategories),
    },
  },
};
