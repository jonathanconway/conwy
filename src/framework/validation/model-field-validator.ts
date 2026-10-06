import { ModelFieldValidatorResults } from "./model-field-validator-results";
import { ModelFieldValidatorValue } from "./model-field-validator-value";

export interface ModelFieldValidator<
  TModel extends object,
  TModelField extends TModel[keyof TModel] & ModelFieldValidatorValue,
> {
  validate(value: TModelField): ModelFieldValidatorResults;
  generateHelpText(): string;
}
