import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { PageMeta } from "./page-meta";

export interface Page extends ContentBase<typeof ContentTypes.Page, PageMeta> {
  readonly content: JSX.Element;
}
