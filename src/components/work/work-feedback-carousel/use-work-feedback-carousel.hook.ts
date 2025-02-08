import { orderBy } from "lodash";

import { Testimonial } from "@/framework/client";

interface UseWorkFeedbackCarouselParams {
  readonly workFeedbacks: readonly Testimonial[];
}

export function useWorkFeedbackCarousel(params: UseWorkFeedbackCarouselParams) {
  const sortedWorkFeedbacks = sortWorkFeedbacks(params.workFeedbacks);

  return {
    sortedWorkFeedbacks,
  };
}

function sortWorkFeedbacks(workFeedbacks: readonly Testimonial[]) {
  return orderBy(workFeedbacks, (feedback) => feedback.content.length, "desc");
}
