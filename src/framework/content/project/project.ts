import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { ProjectMeta } from "./project-meta";

export interface Project
  extends Content<typeof ContentTypes.Project, ProjectMeta> {
  readonly content: JSX.Element;
}
