import { orderBy } from "lodash";

import { Testimonial } from "@/framework";

interface UseEngagementPageFeedbackCarouselParams {
  readonly engagementFeedbacks: readonly Testimonial[];
}

export function useEngagementPageFeedbackCarousel(
  params: UseEngagementPageFeedbackCarouselParams,
) {
  const engagementFeedbacks = sortEngagementFeedbacks(
    params.engagementFeedbacks,
  );

  return {
    engagementFeedbacks,
  };
}

function sortEngagementFeedbacks(workFeedbacks: readonly Testimonial[]) {
  return orderBy(
    workFeedbacks,
    (feedback) => feedback.meta.content.length,
    "desc",
  );
}
