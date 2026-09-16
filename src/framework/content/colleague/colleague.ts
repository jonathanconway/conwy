import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { ColleagueMeta } from "./colleague-meta";

export interface Colleague
  extends Content<typeof ContentTypes.Colleague, ColleagueMeta> {
  readonly fullName: string;
}
