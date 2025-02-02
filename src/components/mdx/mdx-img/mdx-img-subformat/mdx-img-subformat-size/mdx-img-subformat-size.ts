import { getSubformatAttrTokens } from "@/components/mdx/mdx-subformat";

import { MdxImgSubformatProps } from "../mdx-img-subformat-props";

export function getMdxImgSubformatSizeProps(props: MdxImgSubformatProps) {
  const {
    body: src,
    tokens: { size },
  } = getSubformatAttrTokens(props.src ?? "");

  return {
    ...props,
    size,
    src,
  };
}
