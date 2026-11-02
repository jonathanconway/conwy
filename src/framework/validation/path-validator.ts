import { ModelFieldValidator, ModelFieldValidatorResults } from ".";

import { checkIsPath } from "../utils";

import { ModelFieldValidatorValueSingle } from "./model-field-validator-value";

export class PathValidator<
  TModel extends object,
  TModelField extends TModel[keyof TModel] & ModelFieldValidatorValueSingle,
> implements ModelFieldValidator<TModel, TModelField>
{
  validate(value: TModelField): ModelFieldValidatorResults {
    return checkIsPath(String(value ?? ""))
      ? []
      : [`Invalid path. ${this.generateHelpText()}`];
  }

  generateHelpText() {
    return "Should be in form: \`<foo>\` or \`<foo>/<bar>\`. For example: \`layout\` or \`layout/stack\`.";
  }
}
