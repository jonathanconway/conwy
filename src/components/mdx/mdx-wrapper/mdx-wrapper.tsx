import "../mdx-hr/mdx-hr.css";

import { MdxWrapperProps } from "./mdx-wrapper.props";

export function MdxWrapper(props: MdxWrapperProps) {
  return <>{props.children}</>;
}
