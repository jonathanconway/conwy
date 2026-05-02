import { TypeOfConst } from "@/framework/client";

export const StackDistributions = {
  Even: "even",
  Flow: "flow",
};

export type StackDistribution = TypeOfConst<typeof StackDistributions>;
