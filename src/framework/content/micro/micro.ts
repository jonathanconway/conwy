import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { MicroMeta } from "./micro-meta";

export interface Micro
  extends ContentBase<typeof ContentTypes.Micro, MicroMeta> {
  readonly content: JSX.Element;
}
