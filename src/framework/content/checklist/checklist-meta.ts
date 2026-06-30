import { DateTimeString } from "../date-time";
import { MetaBase } from "../meta";

import { ChecklistMetaExtensions } from "./checklist-meta-extensions/checklist-meta-extensions";

export interface ChecklistMeta extends MetaBase<ChecklistMetaExtensions> {
  readonly title: string;
  readonly blurb: string;
  readonly updatedDate: DateTimeString;
  readonly tagTitles: Record<string, string>;
  readonly tagGroupTitles: Record<string, string>;
}
