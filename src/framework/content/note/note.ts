import { JSX } from "react";

import { Content } from "../content";

import { NoteMeta } from "./note-meta";

export interface Note extends Content<"note", NoteMeta> {
  readonly content: JSX.Element;
}
