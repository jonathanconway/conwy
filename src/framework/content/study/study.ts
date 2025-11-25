import { StudyCategory } from "./study-category";
import { StudyStatus } from "./study-status";

export interface Study {
  readonly slug: string;
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
  readonly links?: readonly {
    readonly title?: string;
    readonly url: string;
  }[];
}
