import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { QuoteMeta } from "./quote-meta";

export interface Quote
  extends ContentBase<typeof ContentTypes.Quote, QuoteMeta> {
  readonly text: string | JSX.Element;
}
