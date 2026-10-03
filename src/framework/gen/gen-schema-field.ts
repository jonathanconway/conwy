import { GenSchemaFieldDefault } from "./gen-schema-field-default";
import {
  GenSchemaFieldType,
  GenSchemaFieldTypes,
} from "./gen-schema-field-type";
import { GenSchemaFieldValidator } from "./gen-schema-field-validator";
import { GenSchemaRoot } from "./gen-schema-root";

interface GenSchemaFieldBase<
  TFieldType extends GenSchemaFieldType,
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends
    TGenSchemaRoot[keyof TGenSchemaRoot] = TGenSchemaRoot[keyof TGenSchemaRoot],
> {
  readonly type: TFieldType;
  readonly label?: string;
  readonly default?: GenSchemaFieldDefault<TGenSchemaRoot, TGenSchemaRootField>;
  readonly required?: boolean;
  readonly validators?: readonly GenSchemaFieldValidator<
    TGenSchemaRoot,
    TGenSchemaRootField
  >[];
}

export interface GenSchemaFieldText<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends
    TGenSchemaRoot[keyof TGenSchemaRoot] = TGenSchemaRoot[keyof TGenSchemaRoot],
> extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.Text,
    TGenSchemaRoot,
    TGenSchemaRootField
  > {}

export interface GenSchemaFieldTextList<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends
    TGenSchemaRoot[keyof TGenSchemaRoot] = TGenSchemaRoot[keyof TGenSchemaRoot],
> extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.TextList,
    TGenSchemaRoot,
    TGenSchemaRootField
  > {}

export interface GenSchemaFieldTextMultiLine<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends
    TGenSchemaRoot[keyof TGenSchemaRoot] = TGenSchemaRoot[keyof TGenSchemaRoot],
> extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.TextMultiLine,
    TGenSchemaRoot,
    TGenSchemaRootField
  > {}

export interface GenSchemaFieldYesNo<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends
    TGenSchemaRoot[keyof TGenSchemaRoot] = TGenSchemaRoot[keyof TGenSchemaRoot],
> extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.YesNo,
    TGenSchemaRoot,
    TGenSchemaRootField
  > {}

export interface GenSchemaFieldSelect<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends
    TGenSchemaRoot[keyof TGenSchemaRoot] = TGenSchemaRoot[keyof TGenSchemaRoot],
> extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.Select,
    TGenSchemaRoot,
    TGenSchemaRootField
  > {
  readonly options: readonly string[];
}

export interface GenSchemaFieldMultiSelect<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends
    TGenSchemaRoot[keyof TGenSchemaRoot] = TGenSchemaRoot[keyof TGenSchemaRoot],
> extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.MultiSelect,
    TGenSchemaRoot,
    TGenSchemaRootField
  > {
  readonly options: readonly string[];
}

export type GenSchemaField<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends TGenSchemaRoot[keyof TGenSchemaRoot],
> =
  | GenSchemaFieldText<TGenSchemaRoot, TGenSchemaRootField>
  | GenSchemaFieldTextList<TGenSchemaRoot, TGenSchemaRootField>
  | GenSchemaFieldTextMultiLine<TGenSchemaRoot, TGenSchemaRootField>
  | GenSchemaFieldYesNo<TGenSchemaRoot, TGenSchemaRootField>
  | GenSchemaFieldSelect<TGenSchemaRoot, TGenSchemaRootField>
  | GenSchemaFieldMultiSelect<TGenSchemaRoot, TGenSchemaRootField>;
