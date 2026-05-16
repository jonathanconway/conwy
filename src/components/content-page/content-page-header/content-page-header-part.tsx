import { ReactNode } from "react";

import { ContentType, MetaBase } from "@/framework/client";

import { ContentPageHeaderPartProps } from "./content-page-header-part-props";

export type ContentPageHeaderPart = <
  T extends ContentType,
  U extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
>(
  props: ContentPageHeaderPartProps<T, U, TMetaExtensions>,
) => ReactNode;
