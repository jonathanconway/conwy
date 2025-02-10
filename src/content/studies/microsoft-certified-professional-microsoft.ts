import { Study, StudyStatuses } from "@/framework/client";

export const microsoftCertifiedProfessionalMicrosoft: Study = {
  title: "Microsoft Certified Professional",
  mainUrl: "https://en.wikipedia.org/wiki/Microsoft_Certified_Professional",
  date: "2001",
  institution: "Microsoft",
  slug: "microsoft-certified-professional-microsoft",
  type: "Self-study + Proctored Exam",
  status: StudyStatuses.Completed,
  credential: undefined,
  mark: undefined,
  description: undefined,
  links: [
    {
      title: "Certificate",
      url: "/images/studies/microsoft-certified-professional-microsoft/microsoft-certified-professional-microsoft-certificate.pdf",
    },
  ],
  category: "Software Development",
};
