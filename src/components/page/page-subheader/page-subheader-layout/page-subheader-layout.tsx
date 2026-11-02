import { isArray } from "lodash";
import { ReactNode } from "react";

import { Chain } from "../../../chain";
import { Stack, StackDirections, StackDistributions } from "../../../stack";

interface PageSubHeaderLayoutProps {
  readonly linksSlot: ReactNode;
}

export function PageSubHeaderLayout(props: PageSubHeaderLayoutProps) {
  return (
    <Stack
      direction={StackDirections.Row}
      distribution={StackDistributions.Flow}
      gap={0.5}
    >
      {isArray(props.linksSlot) && <Chain>{props.linksSlot}</Chain>}
      {!isArray(props.linksSlot) && props.linksSlot}
    </Stack>
  );
}
