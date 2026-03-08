import { JSXElementConstructor, ReactElement } from "react";

import { Props } from "@/framework/client";

import { mdxComponentsExtended } from "../../../mdx-components-extended";

interface MdxWrapperChildProps<TChildProps> {
  readonly children: ReactElement<
    unknown,
    string | JSXElementConstructor<TChildProps>
  >;
}

export function MdxWrapperChild<TChildProps>(
  props: MdxWrapperChildProps<TChildProps>,
) {
  const ExtendedMdxComponent =
    mdxComponentsExtended[props.children.type as string];
  if (ExtendedMdxComponent) {
    const childProps = props.children.props as Props<
      typeof ExtendedMdxComponent
    >;
    return <ExtendedMdxComponent {...childProps} />;
  }
}
