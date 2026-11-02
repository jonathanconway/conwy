import { MdxContainer, Page, Testimonials } from "@/components";
import { site, testimonialsFragment } from "@/content";
import * as worksMap from "@/content/works";
import { getTestimonials } from "@/framework";

import { testimonialsRoute, worksRoute } from "../routes";

const works = Object.values(worksMap);

export default function TestimonialsPage() {
  const testimonials = getTestimonials(works);

  return (
    <Page
      title={testimonialsRoute.title}
      breadcrumbSegments={[worksRoute, { title: testimonialsRoute.title }]}
    >
      <MdxContainer>{testimonialsFragment.content}</MdxContainer>

      <Testimonials testimonials={testimonials} />
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - work - testimonials`,
};
