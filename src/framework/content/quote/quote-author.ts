import { Link } from "../link";

export interface QuoteAuthor extends Partial<Link> {
  readonly title: string;
}
