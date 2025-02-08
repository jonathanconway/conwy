import { orderBy } from "lodash";

import { Work } from "../work";

export function getTestimonials(works: Record<string, Work>) {
  const workMetas = Object.values(works).map((work) => work.meta);
  const testimonials = workMetas.flatMap((workMeta) =>
    workMeta.feedbacks.map((feedback) => ({ ...feedback, work: workMeta })),
  );
  const testimonialsOrdered = orderBy(testimonials, "date", "desc");

  return testimonialsOrdered;
}
