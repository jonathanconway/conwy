import { TypeOfConst } from "../utils/typing";

export const GenSchemaFieldTypes = {
  Text: "text",
  TextList: "text-list",
  TextMultiLine: "text-multi-line",
  YesNo: "yes-no",
  Select: "select",
  MultiSelect: "multi-select",
} as const;

export type GenSchemaFieldType = TypeOfConst<typeof GenSchemaFieldTypes>;
