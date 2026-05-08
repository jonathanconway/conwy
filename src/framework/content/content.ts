import { MetaBase } from "../client";

import { ContentType } from "./content-types";

export interface Content<
  TType extends ContentType,
  TMeta extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
> {
  readonly type: TType;
  readonly meta: TMeta;
}
