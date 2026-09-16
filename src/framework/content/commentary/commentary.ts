import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { CommentaryMeta } from "./commentary-meta";

export interface Commentary
  extends Content<typeof ContentTypes.Commentary, CommentaryMeta> {
  readonly content: JSX.Element;
}
