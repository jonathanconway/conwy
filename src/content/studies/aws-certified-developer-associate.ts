import {
  ContentTypes,
  Study,
  StudyCategories,
  StudyStatuses,
} from "@/framework";

export const awsCertifiedDeveloperAssociateStudy: Study = {
  type: ContentTypes.Study,
  meta: {
    title: "AWS Certified Developer - Associate",
    mainUrl: "https://learn.cantrill.io/",
    date: "2026-08-01",
    institution: "Adrian Cantrill",
    slug: "aws-certified-developer-associate",
    type: "Online Course",
    status: StudyStatuses.InProgress,
    credential: undefined,
    mark: undefined,
    description:
      "Course covering AWS developer skills for the AWS Certified Developer DVA-C02 exam",
    category: StudyCategories.Cloud,
    links: [
      {
        url: "https://learn.cantrill.io/courses/1101194",
        title: "",
      },
    ],
  },
};
