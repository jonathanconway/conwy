import { FunctionComponent } from "react";

import { HasChildrenOptional, ReactNodeSingle } from "@/framework/client";

export interface MdxWrapperElementProps {
  readonly children: ReactNodeSingle;
  readonly mdxComponentsExtended: Record<
    string,
    FunctionComponent<HasChildrenOptional>
  >;
}
