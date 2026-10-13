"use client";

import { Testimonial as Testimonial_ } from "@/framework";

import { Carousel } from "../../carousel";
import { Section } from "../../section";
import { Text, TextTypes } from "../../text";

import { useWorkFeedbackCarousel } from "./use-work-feedback-carousel.hook";

interface WorkFeedbackCarouselProps {
  readonly workFeedbacks: readonly Testimonial_[];
}

export function WorkFeedbackCarousel(props: WorkFeedbackCarouselProps) {
  const { sortedWorkFeedbacks } = useWorkFeedbackCarousel(props);

  if (sortedWorkFeedbacks.length === 0) {
    return null;
  }

  return (
    <Section label="Feedback">
      <Carousel
        items={sortedWorkFeedbacks.map((feedback, feedbackIndex) => ({
          ...feedback,
          tooltip: {
            contents: `Feedback ${feedbackIndex + 1}`,
          },
        }))}
        renderBody={({
          item: {
            meta: { content, authorTitle },
          },
        }) => (
          <div key={content}>
            <Text type={TextTypes.Small} as="p">
              {content}
            </Text>

            {authorTitle && <Text type={TextTypes.Small}>– {authorTitle}</Text>}
          </div>
        )}
      />
    </Section>
  );
}
