import { FunctionComponent } from "react";

import { HasChildrenOptional, ReactNodeSingle } from "@/framework";

export interface MdxWrapperElementProps {
  readonly children: ReactNodeSingle;
  readonly mdxComponentsExtended: Record<
    string,
    FunctionComponent<HasChildrenOptional>
  >;
}
