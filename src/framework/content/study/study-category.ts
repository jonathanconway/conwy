import { TypeOfConst } from "../../utils";

export const StudyCategories = {
  ComputerScience: "computer-science",
  Mathematics: "mathematics",
  ArtificialIntelligence: "artificial-intelligence",
  Finance: "finance",
  SoftwareDevelopment: "software-development",
  Design: "design",
  Philosophy: "philosophy",
  Cloud: "cloud",
} as const;

export type StudyCategory = TypeOfConst<typeof StudyCategories>;

export const STUDY_CATEGORY_LABELS = {
  [StudyCategories.ComputerScience]: "Computer Science",
  [StudyCategories.Mathematics]: "Mathematics",
  [StudyCategories.ArtificialIntelligence]: "Artificial Intelligence",
  [StudyCategories.Finance]: "Finance",
  [StudyCategories.SoftwareDevelopment]: "Software Development",
  [StudyCategories.Design]: "Design",
  [StudyCategories.Philosophy]: "Philosophy",
  [StudyCategories.Cloud]: "Cloud",
};
