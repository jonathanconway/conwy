import {
  ContentTypes,
  Study,
  StudyCategories,
  StudyStatuses,
} from "@/framework/client";

export const testingJavascriptStudy: Study = {
  type: ContentTypes.Study,
  meta: {
    title: "Testing Javascript",
    mainUrl: "https://www.testingjavascript.com",
    date: "2025-01-01",
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
