import { ModelFieldValidator } from "../validation";

import { GenSchemaRoot } from "./gen-schema-root";

export type GenSchemaFieldValidator<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaRootField extends
    TGenSchemaRoot[keyof TGenSchemaRoot] = TGenSchemaRoot[keyof TGenSchemaRoot],
> = ModelFieldValidator<TGenSchemaRoot, TGenSchemaRootField>;
