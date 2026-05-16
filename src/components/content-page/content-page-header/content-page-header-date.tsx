import { ReactNode } from "react";

import { Text, TextTypes } from "../../text";

interface ContentPageHeaderDateProps {
  readonly children: ReactNode;
}

export function ContentPageHeaderDate(props: ContentPageHeaderDateProps) {
  return <Text type={TextTypes.Small}>{props.children}</Text>;
}
