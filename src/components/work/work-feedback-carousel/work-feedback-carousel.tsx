"use client";

import { WorkFeedback } from "@/framework/client";

import { Carousel, CarouselItem } from "../../carousel";
import { Section } from "../../section";

import { useWorkFeedbackCarousel } from "./use-work-feedback-carousel.hook";
import * as styles from "./work-feedback-carousel.css";

interface WorkFeedbackCarouselProps {
  readonly workFeedbacks: readonly WorkFeedback[];
}

type WorkFeedbackCarouselItem = CarouselItem & WorkFeedback;

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
        renderBody={({ item: feedback }) => (
          <div key={feedback.quote}>
            <div className={styles.feedbackItemQuote}>{feedback.quote}</div>

            {feedback.author && (
              <div className={styles.feedbackItemAuthor}>
                – {feedback.author}
              </div>
            )}
          </div>
        )}
      />
    </Section>
  );
}
