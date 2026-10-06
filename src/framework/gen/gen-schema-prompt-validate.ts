import { GenSchemaField } from "./gen-schema-field";
import { GenSchemaRoot } from "./gen-schema-root";

export function validateGenSchemaPrompt<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaFieldValue extends TGenSchemaRoot[keyof TGenSchemaRoot],
>(
  genSchemaField: GenSchemaField<
    TGenSchemaRoot,
    TGenSchemaRoot[keyof TGenSchemaRoot]
  >,
  answerValue: TGenSchemaFieldValue,
) {
  const validationErrors = [];
  for (const validator of genSchemaField.validators ?? []) {
    validationErrors.push(...validator.validate(answerValue));
  }
  return validationErrors;
}
