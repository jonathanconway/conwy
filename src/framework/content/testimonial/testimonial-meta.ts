import { DateTimeString } from "../date-time";
import { MetaBase } from "../meta";
import { Url } from "../url";

export interface TestimonialMeta extends MetaBase {
  readonly authorTitle?: string;
  readonly date?: DateTimeString;
  readonly content: string;
  readonly linkedInUrl?: Url;
}
