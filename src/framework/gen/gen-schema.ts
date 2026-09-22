import { GenSchemaField } from "./gen-schema-field";
import { GenSchemaRoot } from "./gen-schema-root";

export interface GenSchema<TGenSchemaRoot extends GenSchemaRoot> {
  readonly name: string;
  readonly fields: GenSchemaFields<TGenSchemaRoot>;
}

export type GenSchemaFields<TGenSchemaRoot extends GenSchemaRoot> = {
  readonly [key in keyof TGenSchemaRoot]: GenSchemaField<TGenSchemaRoot>;
};
