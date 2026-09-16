import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { QuoteMeta } from "./quote-meta";

export interface Quote extends Content<typeof ContentTypes.Quote, QuoteMeta> {
  readonly text: string | JSX.Element;
}
