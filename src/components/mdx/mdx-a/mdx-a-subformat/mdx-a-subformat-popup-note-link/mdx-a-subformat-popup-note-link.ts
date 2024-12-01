import {
  NOTE_HREF_PREFIX,
  notePattern,
  removeChildrenPattern,
} from "@/framework/client";

import { LinkProps } from "../../../../link";
import { MdxAProps } from "../../mdx-a-props";

export function getASubformatPopupNoteLinkProps(props: MdxAProps): LinkProps {
  if (!props.href?.startsWith(NOTE_HREF_PREFIX)) {
    return props;
  }

  const children = removeChildrenPattern(notePattern, props.children);

  const showOpenPopup = true;

  return {
    ...props,
    children,
    showOpenPopup,
  };
}
