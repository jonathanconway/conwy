import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { StudyMeta } from "./study-meta";

export interface Study
  extends ContentBase<typeof ContentTypes.Study, StudyMeta> {}
