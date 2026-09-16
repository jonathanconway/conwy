import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { PageMeta } from "./page-meta";

export interface Page extends Content<typeof ContentTypes.Page, PageMeta> {
  readonly content: JSX.Element;
}
