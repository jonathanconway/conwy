import { JSX } from "react";

import { Content } from "../content";

import { ChecklistMeta } from "./checklist-meta";

export interface Checklist extends Content<"checklist", ChecklistMeta> {
  readonly content: JSX.Element;
  readonly endnotes: JSX.Element;
}
