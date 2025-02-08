"use client";

import { Testimonial as Testimonial_ } from "@/framework/client";

import { Carousel } from "../../carousel";
import { Section } from "../../section";

import { useWorkFeedbackCarousel } from "./use-work-feedback-carousel.hook";
import * as styles from "./work-feedback-carousel.css";

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
        renderBody={({ item: { content, authorTitle } }) => (
          <div key={content}>
            <div className={styles.feedbackItemQuote}>{content}</div>

            {authorTitle && (
              <div className={styles.feedbackItemAuthor}>– {authorTitle}</div>
            )}
          </div>
        )}
      />
    </Section>
  );
}
