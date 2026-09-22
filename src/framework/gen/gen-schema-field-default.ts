import { GenSchemaFieldType } from "./gen-schema-field-type";
import { GenSchemaRoot } from "./gen-schema-root";

export type GenSchemaFieldDefaultValue<TGenSchemaRootField> =
  TGenSchemaRootField;

export interface GenSchemaFieldDefaultFunctionParams<TGenSchemaRoot> {
  readonly valuesSoFar: Partial<TGenSchemaRoot>;
}

export type GenSchemaFieldDefaultFunction<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends GenSchemaRoot[keyof GenSchemaRoot],
> = (
  params: GenSchemaFieldDefaultFunctionParams<TGenSchemaRoot>,
) => TGenSchemaRootField;

export type GenSchemaFieldDefault<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends
    TGenSchemaRoot[keyof TGenSchemaRoot] = TGenSchemaRoot[keyof TGenSchemaRoot],
> =
  | GenSchemaFieldDefaultValue<TGenSchemaRootField>
  | GenSchemaFieldDefaultFunction<TGenSchemaRoot, TGenSchemaRootField>;
