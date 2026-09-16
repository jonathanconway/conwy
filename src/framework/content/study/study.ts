import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { StudyMeta } from "./study-meta";

export interface Study extends Content<typeof ContentTypes.Study, StudyMeta> {}
