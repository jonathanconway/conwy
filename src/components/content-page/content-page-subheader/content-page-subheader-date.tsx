import { ReactNode } from "react";

import { Text, TextTypes } from "../../text";

interface ContentPageSubHeaderDateProps {
  readonly children: ReactNode;
}

export function ContentPageSubHeaderDate(props: ContentPageSubHeaderDateProps) {
  return <Text type={TextTypes.Small}>{props.children}</Text>;
}
