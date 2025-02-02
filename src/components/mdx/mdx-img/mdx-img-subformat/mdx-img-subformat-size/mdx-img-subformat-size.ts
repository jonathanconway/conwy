import { trim } from "lodash";

import { MdxImgSubformatProps } from "../mdx-img-subformat-props";

export function getMdxImgSubformatSizeProps(props: MdxImgSubformatProps) {
  const srcAttrTokens = props.src?.split(",").map(trim) ?? [];
  const srcAttrTokenSize = srcAttrTokens.find((token) =>
    token.startsWith("size"),
  );

  const size = srcAttrTokenSize?.split("=")[1]?.trim() || undefined;

  const src = srcAttrTokens[0];

  console.log("getMdxImgSubformatSizeProps", {
    size,
    src,
  });

  return {
    ...props,
    size,
    src,
  };
}
