import { ContentType } from "./content-types";

export interface Content<TType extends ContentType, TMeta extends object> {
  readonly type: TType;
  readonly slug: string;
  readonly meta: TMeta;
}
