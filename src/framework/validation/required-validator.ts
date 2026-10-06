import {
  ModelFieldValidator,
  ModelFieldValidatorResults,
  checkIsUrl,
} from "../client";

import { ModelFieldValidatorValueSingle } from "./model-field-validator-value";

export class RequiredValidator<
  TModel extends object,
  TModelField extends TModel[keyof TModel] & ModelFieldValidatorValueSingle,
> implements ModelFieldValidator<TModel, TModelField>
{
  validate(value: TModelField): ModelFieldValidatorResults {
    return !!value ? [] : [`Invalid answer. ${this.generateHelpText()}`];
  }

  generateHelpText() {
    return "Value is required and cannot be left blank.";
  }
}
