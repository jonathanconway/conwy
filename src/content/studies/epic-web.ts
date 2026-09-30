import {
  ContentTypes,
  Study,
  StudyCategories,
  StudyStatuses,
} from "@/framework/client";

export const epicWebStudy: Study = {
  type: ContentTypes.Study,
  meta: {
    title: "Epic React",
    mainUrl: "https://www.epicweb.dev",
    date: "2025-01-01",
    institution: "Kent C. Dodds",
    slug: "epic-web",
    type: "Online Course",
    status: StudyStatuses.Planned,
    credential: undefined,
    mark: undefined,
    description: undefined,
    category: StudyCategories.SoftwareDevelopment,
  },
};
