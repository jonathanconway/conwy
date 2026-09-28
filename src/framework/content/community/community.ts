import { JSX } from "react";

import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";

import { CommunityMeta } from "./community-meta";

export interface Community
  extends ContentBase<typeof ContentTypes.Community, CommunityMeta> {
  readonly blurbShort: JSX.Element;
}
