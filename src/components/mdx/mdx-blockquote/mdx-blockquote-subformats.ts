import { getBlockQuoteAsideSubformatProps } from "./mdx-blockquote-aside";
import { MdxBlockQuoteProps } from "./mdx-blockquote-props";
import { getBlockQuotePullQuoteSubformatProps } from "./mdx-blockquote-pull-quote";

export function getBlockQuoteSubformatProps(props: MdxBlockQuoteProps) {
  props = getBlockQuotePullQuoteSubformatProps(props);
  props = getBlockQuoteAsideSubformatProps(props);

  return props;
}
