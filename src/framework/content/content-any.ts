import { MetaBase } from "../content/meta/meta-base";

import { ContentBase } from "./content-base";
import { ContentType } from "./content-type";

export type ContentAny = ContentBase<ContentType, MetaBase, object>;
