import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { ChecklistMeta } from "./checklist-meta";

export interface Checklist
  extends ContentBase<typeof ContentTypes.Checklist, ChecklistMeta> {
  readonly startnotes: JSX.Element;
  readonly content: JSX.Element;
  readonly endnotes: JSX.Element;
}
