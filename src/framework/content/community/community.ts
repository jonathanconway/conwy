import { JSX } from "react";

import { Content } from "../content";

import { CommunityMeta } from "./community-meta";

export interface Community extends Content<"community", CommunityMeta> {
  readonly blurbShort: JSX.Element;
}
