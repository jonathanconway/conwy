import { ReactNode } from "react";

import { Content, DateTimeString } from "@/framework";

import { BreadcrumbSegment } from "../breadcrumb";

export interface ContentPageProps {
  readonly breadcrumbSegments?: readonly BreadcrumbSegment[];

  readonly content: Content;
  readonly preHeader?: ReactNode;
  readonly title: string;
  readonly createdDate?: DateTimeString;
  readonly updatedDate?: DateTimeString;
  readonly subHeader?: ReactNode;
  readonly showHistoryLink?: boolean;
  readonly showSubscribeLink?: boolean;
  readonly showSuggestEditLink?: boolean;

  readonly headings?: readonly string[];

  readonly children: ReactNode;
}
