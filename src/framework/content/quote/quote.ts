import { JSX } from "react";

import { Content } from "../content";

import { QuoteMeta } from "./quote-meta";

export interface Quote extends Content<"quote", QuoteMeta> {
  readonly text: string | JSX.Element;
}
