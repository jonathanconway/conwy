import { BlockQuoteProps } from "../../../block-quote";

import { getBlockQuoteAsideSubformatProps } from "./mdx-blockquote-subformat-aside";
import { getBlockQuoteSubformatCopyableProps } from "./mdx-blockquote-subformat-copyable";
import { getBlockQuotePullQuoteSubformatProps } from "./mdx-blockquote-subformat-pull-quote";
import { MdxBlockquoteSubformatResult } from "./mdx-blockquote-subformat-result";

export function getBlockQuoteSubformatProps(
  props: BlockQuoteProps,
): MdxBlockquoteSubformatResult {
  props = getBlockQuoteSubformatCopyableProps(props);
  props = getBlockQuotePullQuoteSubformatProps(props);
  props = getBlockQuoteAsideSubformatProps(props);

  return props;
}
