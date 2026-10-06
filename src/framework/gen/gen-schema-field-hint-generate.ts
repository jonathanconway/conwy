import { isNotNil } from "../utils";

import { GenSchemaField } from "./gen-schema-field";
import { GenSchemaFieldTypes } from "./gen-schema-field-type";
import { GenSchemaRoot } from "./gen-schema-root";

export function generateSchemaFieldHint(
  genSchemaField: GenSchemaField<
    GenSchemaRoot,
    GenSchemaRoot[keyof GenSchemaRoot]
  >,
  includeInputInstructions = true,
) {
  const inputInstructions = includeInputInstructions
    ? generateSchemaFieldInputInstructions(genSchemaField)
    : undefined;

  const description = genSchemaField.description;

  const validationHelpTexts = (
    genSchemaField.validators?.map((validator) =>
      validator.generateHelpText(),
    ) ?? []
  )
    .filter(isNotNil)
    .join("\n");

  return [inputInstructions, description, validationHelpTexts]
    .filter(isNotNil)
    .join("\n");
}

export function generateSchemaFieldInputInstructions(
  genSchemaField: GenSchemaField<
    GenSchemaRoot,
    GenSchemaRoot[keyof GenSchemaRoot]
  >,
) {
  switch (genSchemaField.type) {
    case GenSchemaFieldTypes.Text:
      return "Input text in one line.";
    case GenSchemaFieldTypes.TextList:
      return "Input values separated by comma: ','.";
    case GenSchemaFieldTypes.TextMultiLine:
      return "Input text line by line. Leave a blank line when done.";
    case GenSchemaFieldTypes.YesNo:
      return "Select yes or no.";
    case GenSchemaFieldTypes.Select:
      return "Select one of the available choices.";
    case GenSchemaFieldTypes.MultiSelect:
      return "Select one or more of the available choices.";
  }
}
