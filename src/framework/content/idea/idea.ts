import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { IdeaMeta } from "./idea-meta";

export interface Idea extends ContentBase<typeof ContentTypes.Idea, IdeaMeta> {
  readonly blurb: JSX.Element;
  readonly content: JSX.Element;
}
