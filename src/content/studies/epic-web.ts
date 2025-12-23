import { Study, StudyCategories, StudyStatuses } from "@/framework/client";

export const epicWebStudy: Study = {
  type: "study",
  meta: {
    title: "Epic React",
    mainUrl: "https://www.epicweb.dev",
    date: "2025",
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
