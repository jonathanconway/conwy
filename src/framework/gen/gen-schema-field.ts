import { GenSchemaFieldDefault } from "./gen-schema-field-default";
import {
  GenSchemaFieldType,
  GenSchemaFieldTypes,
} from "./gen-schema-field-type";
import { GenSchemaRoot } from "./gen-schema-root";

interface GenSchemaFieldBase<
  TFieldType extends GenSchemaFieldType,
  TGenSchemaRoot extends GenSchemaRoot,
> {
  readonly type: TFieldType;
  readonly label?: string;
  readonly default?: GenSchemaFieldDefault<TGenSchemaRoot>;
  readonly required?: boolean;
}

export interface GenSchemaFieldText<TGenSchemaRoot extends GenSchemaRoot>
  extends GenSchemaFieldBase<typeof GenSchemaFieldTypes.Text, TGenSchemaRoot> {}

export interface GenSchemaFieldTextList<TGenSchemaRoot extends GenSchemaRoot>
  extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.TextList,
    TGenSchemaRoot
  > {}

export interface GenSchemaFieldYesNo<TGenSchemaRoot extends GenSchemaRoot>
  extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.YesNo,
    TGenSchemaRoot
  > {}

export interface GenSchemaFieldSelect<TGenSchemaRoot extends GenSchemaRoot>
  extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.Select,
    TGenSchemaRoot
  > {
  readonly options: readonly string[];
}

export interface GenSchemaFieldMultiSelect<TGenSchemaRoot extends GenSchemaRoot>
  extends GenSchemaFieldBase<
    typeof GenSchemaFieldTypes.MultiSelect,
    TGenSchemaRoot
  > {
  readonly options: readonly string[];
}

export type GenSchemaField<TGenSchemaRoot extends GenSchemaRoot> =
  | GenSchemaFieldText<TGenSchemaRoot>
  | GenSchemaFieldTextList<TGenSchemaRoot>
  | GenSchemaFieldYesNo<TGenSchemaRoot>
  | GenSchemaFieldSelect<TGenSchemaRoot>
  | GenSchemaFieldMultiSelect<TGenSchemaRoot>;
