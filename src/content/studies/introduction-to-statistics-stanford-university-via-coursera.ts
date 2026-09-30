import {
  ContentTypes,
  Study,
  StudyCategories,
  StudyStatuses,
} from "@/framework/client";

export const introductionToStatisticsStanfordUniversityViaCourseraStudy: Study =
  {
    type: ContentTypes.Study,
    meta: {
      title: "Introduction to Statistics",
      mainUrl: "https://www.coursera.org/learn/stanford-statistics",
      date: "2025-01-01",
      institution: "Stanford University (via Coursera)",
      slug: "introduction-to-statistics-stanford-university-via-coursera",
      type: "Online Course",
      status: StudyStatuses.Planned,
      credential: undefined,
      mark: undefined,
      description: undefined,
      links: [],
      category: StudyCategories.Mathematics,
    },
  };
