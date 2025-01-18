import { BlockQuoteProps } from "../../../block-quote";

import { getBlockQuoteSubformatAsideProps } from "./mdx-blockquote-subformat-aside";
import { getBlockQuoteSubformatCopyableProps } from "./mdx-blockquote-subformat-copyable";
import { getBlockQuoteSubformatPullQuoteProps } from "./mdx-blockquote-subformat-pull-quote";
import { MdxBlockquoteSubformatResult } from "./mdx-blockquote-subformat-result";
import { getBlockQuoteSubformatSummaryProps } from "./mdx-blockquote-subformat-summary";

export function getBlockQuoteSubformatProps(
  props: BlockQuoteProps,
): MdxBlockquoteSubformatResult {
  props = getBlockQuoteSubformatCopyableProps(props);
  props = getBlockQuoteSubformatPullQuoteProps(props);
  props = getBlockQuoteSubformatSummaryProps(props);
  props = getBlockQuoteSubformatAsideProps(props);

  return props;
}
