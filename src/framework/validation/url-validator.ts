import {
  ModelFieldValidator,
  ModelFieldValidatorResults,
  checkIsUrl,
} from "../client";

import { ModelFieldValidatorValueSingle } from "./model-field-validator-value";

export class UrlValidator<
  TModel extends object,
  TModelField extends TModel[keyof TModel] & ModelFieldValidatorValueSingle,
> implements ModelFieldValidator<TModel, TModelField>
{
  validate(value: TModelField): ModelFieldValidatorResults {
    return checkIsUrl(String(value ?? ""))
      ? []
      : [`Invalid URL. ${this.generateHelpText()}`];
  }

  generateHelpText() {
    return "Should be in form: [<host>://]<host>.<top-level-domain>. For example: https://google.com";
  }
}
