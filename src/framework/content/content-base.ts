import { ContentType } from "./content-type/content-types";
import { MetaBase } from "./meta/meta-base";

export interface ContentBase<
  TType extends ContentType,
  TMeta extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
> {
  readonly type: TType;
  readonly meta: TMeta;
}
