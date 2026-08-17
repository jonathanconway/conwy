import { ContentType } from "./content-types";
import { MetaBase } from "./meta/meta-base";

export interface Content<
  TType extends ContentType,
  TMeta extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
> {
  readonly type: TType;
  readonly meta: TMeta;
}

export type ContentAny = Content<ContentType, MetaBase<object>, object>;
