import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { ColleagueMeta } from "./colleague-meta";

export interface Colleague
  extends ContentBase<typeof ContentTypes.Colleague, ColleagueMeta> {
  readonly fullName: string;
}
