import { orderBy } from "lodash";

import { WorkFeedback } from "@/framework/client";

import { useCarousel } from "../../carousel";

interface UseWorkFeedbackCarouselParams {
  readonly workFeedbacks: readonly WorkFeedback[];
}

export function useWorkFeedbackCarousel(params: UseWorkFeedbackCarouselParams) {
  const sortedWorkFeedbacks = sortWorkFeedbacks(params.workFeedbacks);

  const workFeedbackCarousel = useCarousel({ items: sortedWorkFeedbacks });

  return {
    workFeedbackCarousel,
  };
}

function sortWorkFeedbacks(workFeedbacks: readonly WorkFeedback[]) {
  return orderBy(workFeedbacks, (feedback) => feedback.quote.length, "desc");
}
