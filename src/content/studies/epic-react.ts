import { Study, StudyCategories, StudyStatuses } from "@/framework/client";

export const epicReactStudy: Study = {
  type: "study",
  meta: {
    title: "Epic React",
    mainUrl: "https://www.epicreact.dev",
    date: "2025",
    institution: "Kent C. Dodds",
    slug: "epic-react",
    type: "Online Course",
    status: StudyStatuses.Planned,
    credential: undefined,
    mark: undefined,
    description: undefined,
    category: StudyCategories.SoftwareDevelopment,
  },
};
