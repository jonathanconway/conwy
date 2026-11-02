import { ReactNode } from "react";

import { LayoutPropsBase } from "../../../layouts";
import { Stack } from "../../../stack";

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
