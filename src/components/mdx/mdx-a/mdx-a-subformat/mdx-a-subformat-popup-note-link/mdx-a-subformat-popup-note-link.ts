import { MouseEvent } from "react";

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

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (global.window) {
      const hash = (event.target as HTMLAnchorElement).href.split("#")[1];
      global.window.location.hash = hash;
    }
  };

  return {
    ...props,
    children,
    showOpenPopup,
    onClick,
  };
}
