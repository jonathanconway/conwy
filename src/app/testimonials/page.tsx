import { TestimonialsPage } from "@/components";
import { site } from "@/content";
import * as worksMap from "@/content/works";
import { getTestimonials } from "@/framework";

const works = Object.values(worksMap);
const testimonials = getTestimonials(works);

export default function TestimonialsPage_() {
  return <TestimonialsPage testimonials={testimonials} />;
}

export const metadata = {
  title: `${site.title} - work - testimonials`,
};
