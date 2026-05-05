import { MetaBase } from "../meta";

import { ChecklistMetaExtensions } from "./checklist-meta-extensions/checklist-meta-extensions";

export interface ChecklistMeta extends MetaBase {
  readonly title: string;
  readonly blurb: string;
  readonly extensions?: ChecklistMetaExtensions;
}
