import { Testimonial as Testimonial_ } from "@/framework";

import { ContentList } from "../content-list";

import { Testimonial } from "./testimonial";

interface TestimonialsProps {
  readonly testimonials: readonly Testimonial_[];
}

export function Testimonials(props: TestimonialsProps) {
  const { testimonials } = props;
  return (
    <ContentList>
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.meta.content} testimonial={testimonial} />
      ))}
    </ContentList>
  );
}
