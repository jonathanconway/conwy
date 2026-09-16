import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { ChecklistMeta } from "./checklist-meta";

export interface Checklist
  extends Content<typeof ContentTypes.Checklist, ChecklistMeta> {
  readonly startnotes: JSX.Element;
  readonly content: JSX.Element;
  readonly endnotes: JSX.Element;
}
