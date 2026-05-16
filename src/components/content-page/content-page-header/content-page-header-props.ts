import { ReactNode } from "react";

import { Content, ContentType, MetaBase } from "@/framework/client";
import { DateTimeString } from "@/framework/content/date-time";

export interface ContentPageHeaderProps<
  T extends ContentType,
  U extends MetaBase<TMetaExtensions>,
  TMetaExtensions extends object = object,
> {
  readonly content: Content<T, U>;
  readonly preHeader?: ReactNode;
  readonly title: string;
  readonly createdDate?: DateTimeString;
  readonly updatedDate?: DateTimeString;
  readonly subHeader?: ReactNode;
}
