import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";
import { UrlValidator } from "@/framework/validation";

import { RedirectGenParams } from "./redirect-gen-params";

export const redirectGenSchema: GenSchema<RedirectGenParams> = {
  name: "redirect",
  fields: {
    url: {
      type: GenSchemaFieldTypes.Text,
      validators: [
        new UrlValidator<RedirectGenParams, RedirectGenParams["url"]>(),
      ],
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
    },
  },
};
