import { Link } from "../link";
import { MetaBase } from "../meta";

import { QuoteAuthor } from "./quote-author";

export interface QuoteMeta extends MetaBase {
  readonly author?: QuoteAuthor;
  readonly source?: Link;
}
