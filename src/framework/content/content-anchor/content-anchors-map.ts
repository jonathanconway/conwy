import { ContentType } from "../content-type/content-types";
import { Slug } from "../slug";

import { ContentAnchor } from "./content-anchor";

export type ContentAnchorsMap = Partial<
  Record<ContentType, Partial<Record<Slug, readonly ContentAnchor[]>>>
>;
