import { MetaBase } from "../client";

import { ContentType } from "./content-types";

export interface Content<TType extends ContentType, TMeta extends MetaBase> {
  readonly type: TType;
  readonly meta: TMeta;
}
