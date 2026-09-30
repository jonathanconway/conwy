import {
  ContentTypes,
  Study,
  StudyCategories,
  StudyStatuses,
} from "@/framework/client";

export const aLifeOfHappinessAndFulfilmentCourse: Study = {
  type: ContentTypes.Study,
  meta: {
    title: "A Life of Happiness and Fulfilment",
    mainUrl:
      "https://www.coursera.org/learn/happiness/lecture/qvlAG/welcome-to-the-course",
    date: "2025-06-01",
    institution: "Indian School of Business (via Coursera)",
    slug: "a-life-of-happiness-and-fulfillment",
    type: "Online Course",
    status: StudyStatuses.InProgress,
    credential: undefined,
    mark: undefined,
    description: undefined,
    links: [],
    category: StudyCategories.Psychology,
  },
};
