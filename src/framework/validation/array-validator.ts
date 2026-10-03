import { ModelFieldValidator } from "../client";

import {
  ModelFieldValidatorValueArray,
  ModelFieldValidatorValueSingle,
} from "./model-field-validator-value";

export class ArrayValidator<
  TModel extends object,
  TModelField extends TModel[keyof TModel] & ModelFieldValidatorValueArray,
  TModelFieldItem extends TModelField[number] & ModelFieldValidatorValueSingle,
> implements ModelFieldValidator<TModel, TModelField>
{
  private readonly validator: ModelFieldValidator<TModelField, TModelFieldItem>;

  constructor(
    validator: ModelFieldValidator<
      TModelField,
      TModelField[number] & ModelFieldValidatorValueSingle
    >,
  ) {
    this.validator = validator;
  }

  validate(value: TModelField): readonly string[] {
    const errors: string[] = [];
    for (const valueItem of value) {
      errors.push(...this.validator.validate(valueItem as TModelFieldItem));
    }
    return errors;
  }
}
