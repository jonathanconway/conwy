import { GenSchemaField } from "./gen-schema-field";
import { GenSchemaFieldTypes } from "./gen-schema-field-type";
import { GenSchemaRoot } from "./gen-schema-root";

export function generateSchemaFieldHint(
  genSchemaField: GenSchemaField<GenSchemaField<GenSchemaRoot>>,
) {
  switch (genSchemaField.type) {
    case GenSchemaFieldTypes.Text:
      return undefined;
    case GenSchemaFieldTypes.TextList:
      return "Input values separated by comma: ','.";
    case GenSchemaFieldTypes.YesNo:
      return "Select yes or no.";
    case GenSchemaFieldTypes.Select:
      return "Select one of the available choices.";
    case GenSchemaFieldTypes.MultiSelect:
      return "Select one or more of the available choices.";
  }
}
