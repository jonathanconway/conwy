import { ReactNode } from "react";

import { Text, TextTypes } from "../../../text";

import * as styles from "./content-list-item-blurb.css";

interface ContentListItemBlurbProps {
  readonly children?: ReactNode;
}

export function ContentListItemBlurb(props: ContentListItemBlurbProps) {
  return <Text type={TextTypes.Summary}>{props.children}</Text>;
}
