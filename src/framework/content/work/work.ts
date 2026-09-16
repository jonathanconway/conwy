import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { WorkMeta } from "./work-meta";

export interface Work extends Content<typeof ContentTypes.Work, WorkMeta> {
  readonly blurbLong: JSX.Element;
  readonly blurbShort?: JSX.Element;
}
