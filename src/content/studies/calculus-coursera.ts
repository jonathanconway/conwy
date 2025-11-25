import { Study, StudyCategories, StudyStatuses } from "@/framework/client";

export const calculusCourseraStudy: Study = {
  title: "Introduction to Calculus",
  mainUrl: "https://www.coursera.org/learn/introduction-to-calculus",
  credential: "Non-credit",
  date: "2024",
  institution: "University of Sydney",
  slug: "interaction-design-sydney-uni",
  status: StudyStatuses.Completed,
  type: "Online Course",
  mark: "91%",
  links: [
    {
      title: "Certificate",
      url: "/images/studies/calculus-coursera/calculus-coursera-certificate.pdf",
    },
    {
      title: "Verification",
      url: "https://www.coursera.org/account/accomplishments/verify/32LVBBPDSTYH",
    },
    {
      title: "Grade",
      url: "/images/studies/calculus-coursera/calculus-coursera-grade.pdf",
    },
  ],
  category: StudyCategories.Mathematics,
};
