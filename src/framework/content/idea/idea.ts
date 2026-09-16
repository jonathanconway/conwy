import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { IdeaMeta } from "./idea-meta";

export interface Idea extends Content<typeof ContentTypes.Idea, IdeaMeta> {
  readonly blurb: JSX.Element;
  readonly content: JSX.Element;
}
