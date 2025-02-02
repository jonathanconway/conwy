import { MdxImgProps } from "../mdx-img";

import { getMdxImgSubformatSizeProps } from "./mdx-img-subformat-size/mdx-img-subformat-size";

export function getMdxImgSubformatProps(props: MdxImgProps) {
  props = getMdxImgSubformatSizeProps(props);

  return props;
}
