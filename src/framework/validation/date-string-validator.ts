import {
  ModelFieldValidator,
  ModelFieldValidatorResults,
  checkIsDateString,
} from "../client";

import { ModelFieldValidatorValueSingle } from "./model-field-validator-value";

export class DateStringValidator<
  TModel extends object,
  TModelField extends TModel[keyof TModel] & ModelFieldValidatorValueSingle,
> implements ModelFieldValidator<TModel, TModelField>
{
  validate(value: TModelField): ModelFieldValidatorResults {
    return checkIsDateString(String(value ?? ""))
      ? []
      : [`Invalid DateString. ${this.generateHelpText()}`];
  }

  generateHelpText() {
    return "Should be: yyyy-mm-dd. For example: 2025-01-01.";
  }
}
