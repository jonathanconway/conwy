import { ContentAny } from "./content-any";
import { ContentBase } from "./content-base";
import { ContentType } from "./content-type";
import { MetaBase } from "./meta";

export type ContentMap<
  TContent extends ContentBase<
    ContentType,
    MetaBase<object>,
    object
  > = ContentAny,
> = Record<string, TContent>;
