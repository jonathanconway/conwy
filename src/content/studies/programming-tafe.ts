import { Study, StudyStatuses } from "@/framework";

export const programmingTafe: Study = {
  title: "Programming",
  mainUrl:
    "https://www.tafensw.edu.au/course-areas/information-and-communication-technology/courses/certificate-iv-in-information-technology-programming--ICT40120-06",
  credential: "Certificate IV",
  date: "2004",
  institution: "Hornsby College of TAFE",
  slug: "programming-tafe",
  type: "College Course",
  status: StudyStatuses.Completed,
  mark: "Distinction",
  description: undefined,
  links: [
    {
      title: "Certificate",
      url: "/images/studies/programming-tafe/programming-tafe-certificate.pdf",
    },
  ],
};
