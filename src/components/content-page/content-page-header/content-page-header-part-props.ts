import { Content, ContentType, MetaBase } from "@/framework/client";

export interface ContentPageHeaderPartProps<
  T extends ContentType,
  U extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
> {
  readonly content: Content<T, U>;
}
