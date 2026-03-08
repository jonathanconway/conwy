import { JSX } from "react";

import { MdxKbd } from "./components";

export const mdxComponentsExtended: Record<
  string,
  (props: object) => JSX.Element
> = {
  kbd: MdxKbd,
};
