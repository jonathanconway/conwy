import { ReactNode } from "react";

import {
  ContentBase,
  ContentType,
  DateTimeString,
  MetaBase,
} from "@/framework/client";

export interface ContentPageHeaderProps<
  T extends ContentType,
  U extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
> {
  readonly content: ContentBase<T, U>;
  readonly preHeader?: ReactNode;
  readonly title: string;
  readonly createdDate?: DateTimeString;
  readonly updatedDate?: DateTimeString;
  readonly subHeader?: ReactNode;
  readonly showHistoryLink?: boolean;
  readonly showSubscribeLink?: boolean;
  readonly showSuggestEditLink?: boolean;
}
