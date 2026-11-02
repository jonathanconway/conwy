import { orderBy } from "lodash";

import { Testimonial } from "@/framework";

interface UseWorkPageFeedbackCarouselParams {
  readonly workFeedbacks: readonly Testimonial[];
}

export function useWorkPageFeedbackCarousel(
  params: UseWorkPageFeedbackCarouselParams,
) {
  const sortedWorkFeedbacks = sortWorkFeedbacks(params.workFeedbacks);

  return {
    sortedWorkFeedbacks,
  };
}

function sortWorkFeedbacks(workFeedbacks: readonly Testimonial[]) {
  return orderBy(
    workFeedbacks,
    (feedback) => feedback.meta.content.length,
    "desc",
  );
}
