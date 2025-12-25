import { Link } from "../link";
import { MetaBase } from "../meta";

export interface QuoteMeta extends MetaBase {
  readonly author?: string;
  readonly source?: Link;
}
