import { orderBy } from "lodash";

import { WorkFeedback } from "@/framework/client";

interface UseWorkFeedbackCarouselParams {
  readonly workFeedbacks: readonly WorkFeedback[];
}

export function useWorkFeedbackCarousel(params: UseWorkFeedbackCarouselParams) {
  const sortedWorkFeedbacks = sortWorkFeedbacks(params.workFeedbacks);

  return {
    sortedWorkFeedbacks,
  };
}

function sortWorkFeedbacks(workFeedbacks: readonly WorkFeedback[]) {
  return orderBy(workFeedbacks, (feedback) => feedback.quote.length, "desc");
}
