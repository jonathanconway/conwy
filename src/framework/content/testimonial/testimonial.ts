import { DateTime } from "../date-time";
import { Url } from "../url";
import { WorkMeta } from "../work";

export interface Testimonial {
  readonly authorTitle?: string;
  readonly date?: DateTime;
  readonly content: string;
  readonly linkedInUrl?: Url;
}

export interface TestimonialAndWork extends Testimonial {
  readonly work?: WorkMeta;
}
