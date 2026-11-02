import { orderBy } from "lodash";

import { Work } from "../work";

export function getTestimonials(works: readonly Work[]) {
  const workMetas = works.map((work) => work.meta);
  const testimonials = workMetas.flatMap((workMeta) =>
    workMeta.feedbacks.map((feedback) => ({ ...feedback, work: workMeta })),
  );
  const testimonialsOrdered = orderBy(testimonials, "meta.date", "desc");

  return testimonialsOrdered;
}
