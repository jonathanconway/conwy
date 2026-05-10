import { Text, TextTypes } from "../../text";

import { LinkBoxDescriptionProps } from "./link-box-description-props";

export function LinkBoxDescription(props: LinkBoxDescriptionProps) {
  return <Text type={TextTypes.Summary}>{props.children}</Text>;
}
