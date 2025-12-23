import { Link } from "../link";
import { MetaBase } from "../meta";

import { StudyCategory } from "./study-category";
import { StudyStatus } from "./study-status";

export interface StudyMeta extends MetaBase {
  readonly title: string;
  readonly mainUrl?: string;
  readonly institution: string;
  readonly type: string;
  readonly date: string;
  readonly status: StudyStatus;
  readonly credential?: string;
  readonly mark?: string;
  readonly description?: string;
  readonly category: StudyCategory;
  readonly links?: readonly Link[];
}
