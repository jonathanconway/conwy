import { JSX } from "react";

import { Content } from "../content";

import { IdeaMeta } from "./idea-meta";

export interface Idea extends Content<"idea", IdeaMeta> {
  readonly blurb: JSX.Element;
  readonly content: JSX.Element;
}
