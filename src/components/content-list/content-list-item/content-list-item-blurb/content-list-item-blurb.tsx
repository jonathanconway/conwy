import { ReactNode } from "react";

import { Text, TextTypes } from "../../../text";

interface ContentListItemBlurbProps {
  readonly children?: ReactNode;
}

export function ContentListItemBlurb(props: ContentListItemBlurbProps) {
  return <Text type={TextTypes.Summary}>{props.children}</Text>;
}
