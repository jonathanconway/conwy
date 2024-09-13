"use client";

import { WorkFeedback } from "@/framework/client";

import { CarouselNav } from "../../carousel";
import { Section } from "../../section";

import { useWorkFeedbackCarousel } from "./use-work-feedback-carousel.hook";
import * as styles from "./work-feedback-carousel.styles";

// todo: extract to general Carousel

interface WorkFeedbackCarouselProps {
  readonly workFeedbacks: readonly WorkFeedback[];
}

export function WorkFeedbackCarousel(props: WorkFeedbackCarouselProps) {
  const { workFeedbackCarousel } = useWorkFeedbackCarousel(props);

  if (workFeedbackCarousel.items.length === 0) {
    return null;
  }

  return (
    <Section label="Feedback">
      <div className={styles.feedbackCarouselContainer}>
        <div className={styles.feedbackItems}>
          {workFeedbackCarousel.items.map((feedback) => (
            <div
              key={feedback.quote}
              className={styles.feedbackItem(
                workFeedbackCarousel.selectedItem === feedback,
              )}
            >
              <div className={styles.feedbackItemQuote}>{feedback.quote}</div>

              {feedback.author && (
                <div className={styles.feedbackItemAuthor}>
                  – {feedback.author}
                </div>
              )}
            </div>
          ))}
        </div>

        {workFeedbackCarousel.items.length > 1 && (
          <CarouselNav
            carousel={workFeedbackCarousel}
            tabTooltipDescription="Feedback"
          />
        )}
      </div>
    </Section>
  );
}
