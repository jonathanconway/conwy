import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { MicroMeta } from "./micro-meta";

export interface Micro extends Content<typeof ContentTypes.Micro, MicroMeta> {
  readonly content: JSX.Element;
}
