import { Engagement, getNext, getPrevious } from "@/framework";
import { TypeOfConst } from "@/framework";

interface UseEngagementPageHeaderNavParams {
  readonly engagement: Engagement;
  readonly engagements: readonly Engagement[];
}

interface UseEngagementPageHeaderNavResult {
  readonly engagementsBackNext: EngagementsBackNext;
}

export const BackNextNavDirections = {
  Back: "back",
  Next: "next",
} as const;

export type BackNextNavDirection = TypeOfConst<typeof BackNextNavDirections>;

type EngagementsBackNext = [EngagementBackNext, EngagementBackNext];

interface EngagementBackNext {
  readonly direction: BackNextNavDirection;
  readonly engagement?: Engagement;
}

export function useEngagementPageHeaderNav(
  params: UseEngagementPageHeaderNavParams,
): UseEngagementPageHeaderNavResult {
  const { engagement, engagements } = params;
  const engagementsBackNext: [EngagementBackNext, EngagementBackNext] = [
    {
      direction: "back",
      engagement: getPrevious(engagements, engagement),
    },
    {
      direction: "next",
      engagement: getNext(engagements, engagement),
    },
  ];

  return {
    engagementsBackNext,
  };
}
