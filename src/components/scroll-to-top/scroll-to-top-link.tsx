import { IconTypes } from "../icon";
import { Link } from "../link";
import { TextSizes } from "../text";

import { SCROLL_TO_TOP_ANCHOR_ID } from "./scroll-to-top-anchor.const";

export function ScrollToTopLink() {
  return (
    <Link
      href={`#${SCROLL_TO_TOP_ANCHOR_ID}`}
      size={TextSizes.xs}
      icon={IconTypes.ArrowUp}
    >
      Back to top
    </Link>
  );
}
