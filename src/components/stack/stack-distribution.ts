import { TypeOfConst } from "@/framework";

export const StackDistributions = {
  Even: "even",
  Flow: "flow",
};

export type StackDistribution = TypeOfConst<typeof StackDistributions>;
