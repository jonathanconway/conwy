import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { FragmentGenParams } from "./fragment-gen-params";

export const fragmentGenSchema: GenSchema<FragmentGenParams> = {
  name: "fragment",
  fields: {
    slug: {
      type: GenSchemaFieldTypes.Text,
    },
    content: {
      type: GenSchemaFieldTypes.TextMultiLine,
    },
  },
};
