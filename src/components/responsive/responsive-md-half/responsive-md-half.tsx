import { ReactNode } from "react";

import { Breakpoints } from "../../styling";
import { Responsive } from "../responsive";
import { ResponsiveStack } from "../responsive-stack";

interface ResponsiveMdHalfProps {
  readonly children?: ReactNode;
}

export function ResponsiveMdHalf(props: ResponsiveMdHalfProps) {
  return (
    <ResponsiveStack direction="row">
      {props.children}

      <Responsive minWidth={Breakpoints.md}>
        <div></div>
      </Responsive>
    </ResponsiveStack>
  );
}
