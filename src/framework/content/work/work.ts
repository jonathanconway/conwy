import { JSX } from "react";

import { Content } from "../content";

import { WorkMeta } from "./work-meta";

export interface Work extends Content<"work", WorkMeta> {
  readonly blurbLong: JSX.Element;
  readonly blurbShort?: JSX.Element;
}
