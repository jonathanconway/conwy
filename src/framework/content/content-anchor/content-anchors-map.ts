import { ContentType } from "../content-types";
import { Slug } from "../slug";

import { ContentAnchor } from "./content-anchor";

export type ContentAnchorsMap = Record<
  ContentType,
  Record<Slug, readonly ContentAnchor[]>
>;
