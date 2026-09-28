import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { CommentaryMeta } from "./commentary-meta";

export interface Commentary
  extends ContentBase<typeof ContentTypes.Commentary, CommentaryMeta> {
  readonly content: JSX.Element;
}
