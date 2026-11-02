"use client";

import { Testimonial as Testimonial_ } from "@/framework";

import { Carousel } from "../../../carousel";
import { Section } from "../../../section";
import { Text, TextTypes } from "../../../text";

import { useEngagementPageFeedbackCarousel } from "./use-engagement-page-feedback-carousel.hook";

interface EngagementPageFeedbackCarouselProps {
  readonly engagementFeedbacks: readonly Testimonial_[];
}

export function EngagementPageFeedbackCarousel(
  props: EngagementPageFeedbackCarouselProps,
) {
  const { engagementFeedbacks } = useEngagementPageFeedbackCarousel(props);

  if (engagementFeedbacks.length === 0) {
    return null;
  }

  return (
    <Section label="Feedback">
      <Carousel
        items={engagementFeedbacks.map((feedback, feedbackIndex) => ({
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
