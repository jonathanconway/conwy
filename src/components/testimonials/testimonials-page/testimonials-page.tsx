import { testimonialsRoute, worksRoute } from "@/app/routes";
import { testimonialsFragment } from "@/content";
import { Testimonial } from "@/framework";

import { MdxContainer } from "../../mdx";
import { Page } from "../../page";
import { Testimonials } from "../testimonials";

interface TestimonialsPageProps {
  readonly testimonials: Testimonial[];
}

export function TestimonialsPage(props: TestimonialsPageProps) {
  const { testimonials } = props;
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
