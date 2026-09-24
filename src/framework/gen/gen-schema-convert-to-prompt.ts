import { isFunction } from "lodash";
import { PromptObject } from "prompts";

import {
  GenSchemaField,
  GenSchemaFieldMultiSelect,
  GenSchemaFieldSelect,
  GenSchemaFieldYesNo,
} from "./gen-schema-field";
import { GenSchemaFieldDefault } from "./gen-schema-field-default";
import { generateSchemaFieldHint } from "./gen-schema-field-hint-generate";
import { generateSchemaFieldLabel } from "./gen-schema-field-label-generate";
import { GenSchemaFieldTypes } from "./gen-schema-field-type";
import { GenSchemaRoot } from "./gen-schema-root";

export function convertGenSchemaFieldToPromptField<
  TGenSchemaRoot extends GenSchemaRoot,
>(
  name: string,
  genSchemaField: GenSchemaField<TGenSchemaRoot>,
  valuesSoFar: Partial<TGenSchemaRoot>,
): PromptObject {
  switch (genSchemaField.type) {
    case GenSchemaFieldTypes.Text:
      return convertGenSchemaFieldToPromptFieldText(
        name,
        genSchemaField,
        valuesSoFar,
      );
    case GenSchemaFieldTypes.TextList:
      return convertGenSchemaFieldToPromptFieldTextList(
        name,
        genSchemaField,
        valuesSoFar,
      );
    case GenSchemaFieldTypes.YesNo:
      return convertGenSchemaFieldToPromptFieldYesNo(
        name,
        genSchemaField,
        valuesSoFar,
      );
    case GenSchemaFieldTypes.Select:
      return convertGenSchemaFieldToPromptFieldSelect(
        name,
        genSchemaField,
        valuesSoFar,
      );
    case GenSchemaFieldTypes.MultiSelect:
      return convertGenSchemaFieldToPromptFieldMultiSelect(
        name,
        genSchemaField,
        valuesSoFar,
      );
  }
}

function evalDefault<TGenSchemaRoot extends GenSchemaRoot>(
  default_: GenSchemaFieldDefault<TGenSchemaRoot> | undefined,
  valuesSoFar: Partial<TGenSchemaRoot>,
) {
  if (!default_) {
    return;
  }

  if (isFunction(default_)) {
    return default_({ valuesSoFar });
  }

  return default_;
}

function convertGenSchemaFieldToPromptFieldBase<
  TGenSchemaRoot extends GenSchemaRoot,
>(
  name: string,
  genSchemaField: GenSchemaField<TGenSchemaRoot>,
  valuesSoFar: Partial<TGenSchemaRoot>,
): Omit<PromptObject, "type"> {
  const message = generateSchemaFieldLabel(name, genSchemaField);
  const hint = generateSchemaFieldHint(genSchemaField);
  const initial = evalDefault(genSchemaField.default, valuesSoFar);

  return {
    name,
    message,
    hint,
    initial,
  };
}

export function convertGenSchemaFieldToPromptFieldText<
  TGenSchemaRoot extends GenSchemaRoot,
>(
  name: string,
  genSchemaField: GenSchemaField<TGenSchemaRoot>,
  valuesSoFar: Partial<TGenSchemaRoot>,
): PromptObject {
  return {
    ...convertGenSchemaFieldToPromptFieldBase(
      name,
      genSchemaField,
      valuesSoFar,
    ),
    type: "text",
  };
}

export function convertGenSchemaFieldToPromptFieldTextList<
  TGenSchemaRoot extends GenSchemaRoot,
>(
  name: string,
  genSchemaField: GenSchemaField<TGenSchemaRoot>,
  valuesSoFar: Partial<TGenSchemaRoot>,
): PromptObject {
  return {
    ...convertGenSchemaFieldToPromptFieldBase(
      name,
      genSchemaField,
      valuesSoFar,
    ),
    type: "list",
  };
}

export function convertGenSchemaFieldToPromptFieldYesNo<
  TGenSchemaRoot extends GenSchemaRoot,
>(
  name: string,
  genSchemaField: GenSchemaFieldYesNo<TGenSchemaRoot>,
  valuesSoFar: Partial<TGenSchemaRoot>,
): PromptObject {
  return {
    ...convertGenSchemaFieldToPromptFieldBase(
      name,
      genSchemaField,
      valuesSoFar,
    ),
    type: "confirm",
  };
}

export function convertGenSchemaFieldToPromptFieldSelect<
  TGenSchemaRoot extends GenSchemaRoot,
>(
  name: string,
  genSchemaField: GenSchemaFieldSelect<TGenSchemaRoot>,
  valuesSoFar: Partial<TGenSchemaRoot>,
): PromptObject {
  return {
    ...convertGenSchemaFieldToPromptFieldBase(
      name,
      genSchemaField,
      valuesSoFar,
    ),
    type: "select",
    choices: genSchemaField.options.map((option) => ({ title: option })),
  };
}

export function convertGenSchemaFieldToPromptFieldMultiSelect<
  TGenSchemaRoot extends GenSchemaRoot,
>(
  name: string,
  genSchemaField: GenSchemaFieldMultiSelect<TGenSchemaRoot>,
  valuesSoFar: Partial<TGenSchemaRoot>,
): PromptObject {
  return {
    ...convertGenSchemaFieldToPromptFieldBase(
      name,
      genSchemaField,
      valuesSoFar,
    ),
    type: "multiselect",
    choices: genSchemaField.options.map((option) => ({ title: option })),
  };
}
