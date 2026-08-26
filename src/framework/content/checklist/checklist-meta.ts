import { DateTimeString } from "../date-time";
import { MetaBase } from "../meta";

import { ChecklistMetaExtensions } from "./checklist-meta-extensions/checklist-meta-extensions";
import { ChecklistTag } from "./checklist-tags";

export interface ChecklistMeta extends MetaBase<ChecklistMetaExtensions> {
  readonly title: string;
  readonly blurb: string;
  readonly updatedDate: DateTimeString;
  readonly checklistTags: readonly ChecklistTag[];
  readonly tagTitles: Record<string, string>;
  readonly tagGroupTitles: Record<string, string>;
}
