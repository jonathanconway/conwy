import { TypeOfConst } from "../../utils";

export const StudyCategories = {
  ArtificialIntelligence: "artificial-intelligence",
  Cloud: "cloud",
  ComputerScience: "computer-science",
  Design: "design",
  Finance: "finance",
  Mathematics: "mathematics",
  Philosophy: "philosophy",
  Psychology: "psychology",
  SoftwareDevelopment: "software-development",
} as const;

export type StudyCategory = TypeOfConst<typeof StudyCategories>;

export const STUDY_CATEGORY_LABELS = {
  [StudyCategories.ArtificialIntelligence]: "Artificial Intelligence",
  [StudyCategories.Cloud]: "Cloud",
  [StudyCategories.ComputerScience]: "Computer Science",
  [StudyCategories.Design]: "Design",
  [StudyCategories.Finance]: "Finance",
  [StudyCategories.Mathematics]: "Mathematics",
  [StudyCategories.Philosophy]: "Philosophy",
  [StudyCategories.Psychology]: "Psychology",
  [StudyCategories.SoftwareDevelopment]: "Software Development",
};
