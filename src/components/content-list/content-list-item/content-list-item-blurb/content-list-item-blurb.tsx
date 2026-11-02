import { ReactNode } from "react";

import { Text, TextSpacingStrategies, TextTypes } from "../../../text";

interface ContentListItemBlurbProps {
  readonly children?: ReactNode;
}

export function ContentListItemBlurb(props: ContentListItemBlurbProps) {
  return (
    <Text
      type={TextTypes.Blurb}
      spacingStrategy={TextSpacingStrategies.Exclude}
    >
      {props.children}
    </Text>
  );
}
