import { Content } from "../content";

import { ColleagueMeta } from "./colleague-meta";

export interface Colleague extends Content<"colleague", ColleagueMeta> {
  readonly fullName: string;
}
