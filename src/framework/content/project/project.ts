import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { ProjectMeta } from "./project-meta";

export interface Project
  extends ContentBase<typeof ContentTypes.Project, ProjectMeta> {
  readonly content: JSX.Element;
}
