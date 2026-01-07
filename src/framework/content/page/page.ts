import { JSX } from "react";

import { Content } from "../content";

import { PageMeta } from "./page-meta";

export interface Page extends Content<"page", PageMeta> {
  readonly content: JSX.Element;
}
