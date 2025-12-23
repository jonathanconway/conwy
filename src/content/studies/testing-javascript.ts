import { Study, StudyCategories, StudyStatuses } from "@/framework/client";

export const testingJavascriptStudy: Study = {
  type: "study",
  meta: {
    title: "Testing Javascript",
    mainUrl: "https://www.testingjavascript.com",
    date: "2025",
    institution: "Kent C. Dodds",
    slug: "testing-javascript",
    type: "Online Course",
    status: StudyStatuses.Planned,
    credential: undefined,
    mark: undefined,
    description: undefined,
    category: StudyCategories.SoftwareDevelopment,
  },
};
