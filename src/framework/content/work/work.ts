import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { WorkMeta } from "./work-meta";

export interface Work extends ContentBase<typeof ContentTypes.Work, WorkMeta> {
  readonly blurbLong: JSX.Element;
  readonly blurbShort?: JSX.Element;
}
