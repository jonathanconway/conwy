import { JSX } from "react";

import { Content } from "../content";

import { ProjectMeta } from "./project-meta";

export interface Project extends Content<"project", ProjectMeta> {
  readonly content: JSX.Element;
}
