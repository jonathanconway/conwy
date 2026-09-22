import { TypeOfConst } from "../utils";

export const GenSchemaFieldTypes = {
  Text: "text",
  YesNo: "yes-no",
  Select: "select",
  MultiSelect: "multi-select",
} as const;

export type GenSchemaFieldType = TypeOfConst<typeof GenSchemaFieldTypes>;
