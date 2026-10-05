import {
  ContentTypes,
  Study,
  StudyCategories,
  StudyStatuses,
} from "@/framework/client";

export const overcomingGravityStudy: Study = {
  type: ContentTypes.Study,
  meta: {
    title: "Overcoming gravity",
    mainUrl:
      "https://www.youtube.com/playlist?list=PLpxvbJWbbO-g8pDe387l_IDXrHh3OXDy7",
    date: "2026-10-05",
    institution: "Steven Low",
    slug: "overcoming-gravity",
    type: "Online Course",
    status: StudyStatuses.InProgress,
    credential: undefined,
    mark: undefined,
    description:
      "Commonly referred to by readers as an “exercise Bible,” Overcoming Gravity is a comprehensive guide that provides a gold mine of information for gymnastics and bodyweight strength training.",
    category: StudyCategories.Psychology,
  },
};
