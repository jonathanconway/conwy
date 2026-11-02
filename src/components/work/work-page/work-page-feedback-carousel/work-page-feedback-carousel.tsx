"use client";

import { Testimonial as Testimonial_ } from "@/framework";

import { EngagementPageFeedbackCarousel } from "../../../engagement";

interface WorkPageFeedbackCarouselProps {
  readonly workFeedbacks: readonly Testimonial_[];
}

export function WorkPageFeedbackCarousel(props: WorkPageFeedbackCarouselProps) {
  return (
    <EngagementPageFeedbackCarousel engagementFeedbacks={props.workFeedbacks} />
  );
}
