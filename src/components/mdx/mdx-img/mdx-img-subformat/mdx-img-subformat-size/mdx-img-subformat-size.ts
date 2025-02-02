import { getSubformatUrlTokens } from "@/components/mdx/mdx-subformat";

import { MdxImgSubformatProps } from "../mdx-img-subformat-props";

export function getMdxImgSubformatSizeProps(props: MdxImgSubformatProps) {
  const {
    body: src,
    tokens: { size },
  } = getSubformatUrlTokens(props.src ?? "");

  return {
    ...props,
    size,
    src,
  };
}
