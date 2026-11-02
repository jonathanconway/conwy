import { ReactNode } from "react";

import { Stack } from "../../stack";
import { LayoutPropsBase } from "../layout-props";

interface PageHeaderLayoutProps extends LayoutPropsBase {
  readonly titleSlot?: ReactNode;
  readonly linksSlot?: ReactNode;
}

export function PageHeaderLayout(props: PageHeaderLayoutProps) {
  return (
    <Stack>
      {props.titleSlot}
      {props.linksSlot}
    </Stack>
  );
}
