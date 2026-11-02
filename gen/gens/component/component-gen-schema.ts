import { PathValidator } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";

import { ComponentGenParams } from "./component-gen-params";

export const componentGenSchema: GenSchema<ComponentGenParams> = {
  name: "component",
  fields: {
    componentName: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    path: {
      type: GenSchemaFieldTypes.Text,
      validators: [new PathValidator()],
    },
    description: {
      type: GenSchemaFieldTypes.TextMultiLine,
    },
  },
};
