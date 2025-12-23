import { Study, StudyCategories, StudyStatuses } from "@/framework/client";

export const secureCodeWarriorNodeStudy: Study = {
  type: "study",
  meta: {
    title: "Secure Development Assessment - Javascript, Node.js, Express",
    date: "2025",
    institution: "Secure Code Warrior",
    slug: "secure-development-assessment-javascript",
    type: "Online Course",
    mark: "81%",
    status: StudyStatuses.Completed,
    links: [],
    category: StudyCategories.SoftwareDevelopment,
  },
};
