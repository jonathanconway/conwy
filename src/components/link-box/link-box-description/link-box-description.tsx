import { Text, TextTypes } from "../../text";

import { LinkBoxDescriptionProps } from "./link-box-description-props";

export function LinkBoxDescription(props: LinkBoxDescriptionProps) {
  return <Text type={TextTypes.Small}>{props.children}</Text>;
}
