import { isString } from "lodash";

import { getSubformatUrlTokens } from "../../../mdx-subformat";
import { MdxImgSubformatProps } from "../mdx-img-subformat-props";

export function getMdxImgSubformatSizeProps(props: MdxImgSubformatProps) {
  const src = (isString(props.src) ? props.src : "") ?? "";
  const {
    body,
    tokens: { size },
  } = getSubformatUrlTokens(src);

  return {
    ...props,
    size,
    src: body,
  };
}
