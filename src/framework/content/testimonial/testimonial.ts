import { ContentBase } from "../content-base";
import { ContentTypes } from "../content-type";
import { WorkMeta } from "../work";

import { TestimonialMeta } from "./testimonial-meta";

export interface Testimonial
  extends ContentBase<typeof ContentTypes.Testimonial, TestimonialMeta> {}

export interface TestimonialAndWork extends Testimonial {
  readonly work?: WorkMeta;
}
