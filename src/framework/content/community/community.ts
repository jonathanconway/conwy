import { JSX } from "react";

import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { CommunityMeta } from "./community-meta";

export interface Community
  extends Content<typeof ContentTypes.Community, CommunityMeta> {
  readonly blurbShort: JSX.Element;
}
