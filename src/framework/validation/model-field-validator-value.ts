export type ModelFieldValidatorValueSingle =
  | string
  | number
  | boolean
  | null
  | undefined;

export type ModelFieldValidatorValueArray = readonly ModelFieldValidatorValue[];

export type ModelFieldValidatorValue =
  | ModelFieldValidatorValueSingle
  | ModelFieldValidatorValueArray;
