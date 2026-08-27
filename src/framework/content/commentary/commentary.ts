import { JSX } from "react";

import { Content } from "../content";

import { CommentaryMeta } from "./commentary-meta";

export interface Commentary extends Content<"commentary", CommentaryMeta> {
  readonly content: JSX.Element;
}
