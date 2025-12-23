import { Study, StudyCategories, StudyStatuses } from "@/framework/client";

export const networkAdministrationHornsbyCollegeOfTafeStudy: Study = {
  type: "study",
  meta: {
    title: "Network Administration",
    mainUrl:
      "https://www.tafensw.edu.au/international/courses/Certificate-III-in-Information-Technology-(Networking)--ICT30120N",
    credential: "Certificate III",
    date: "2004",
    institution: "Hornsby College of TAFE",
    slug: "network-administration-tafe",
    type: "College Course",
    status: StudyStatuses.Completed,
    mark: "Distinction",
    description: undefined,
    links: [
      {
        title: "Certificate",
        url: "/images/studies/network-administration-tafe/network-administration-tafe-certificate.pdf",
      },
    ],
    category: StudyCategories.Cloud,
  },
};
