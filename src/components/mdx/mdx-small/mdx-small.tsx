import { Text, TextTypes } from "../../text";

import { MdxSmallProps } from "./mdx-small-props";

export function MdxSmall(props: MdxSmallProps) {
  return <Text type={TextTypes.Small} {...props} />;
}
