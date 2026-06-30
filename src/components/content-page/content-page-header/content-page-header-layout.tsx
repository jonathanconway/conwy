import { ReactNode } from "react";

import { Chain } from "../../chain";
import { Heading } from "../../heading";
import { Stack, StackDirections, StackDistributions } from "../../stack";

interface ContentPageHeaderLayoutProps {
  readonly preHeader?: ReactNode;
  readonly heading?: ReactNode;
  readonly links?: readonly ReactNode[];
  readonly subHeader?: ReactNode;
}

export function ContentPageHeaderLayout(props: ContentPageHeaderLayoutProps) {
  return (
    <Stack direction={StackDirections.Column} gap={1}>
      {props.preHeader}

      <Heading id="top" level={2}>
        {props.heading}
      </Heading>

      {props.links && (
        <Stack
          direction={StackDirections.Row}
          distribution={StackDistributions.Flow}
          gap={0.5}
        >
          <Chain>{props.links}</Chain>
        </Stack>
      )}

      {props.subHeader}
    </Stack>
  );
}
