import { cn } from "@jonathanconway/tailwindjs";

import { MdxBlockQuoteProps } from "./mdx-blockquote-props";
import { getBlockQuoteSubformatProps } from "./mdx-blockquote-subformats";
import * as styles from "./mdx-blockquote.styles";

export function MdxBlockQuote(props: MdxBlockQuoteProps) {
  props = getBlockQuoteSubformatProps(props);

  const { className, children, ...restProps } = props;

  // if (getIsAsideSubformat(children)) {
  //   return (
  //     <MdxAside {...props} children={getAsideSubformatChildren(children)} />
  //   );
  // }

  // if (getIsSubformatPullQuote(children)) {
  //   return (
  //     <MdxAside
  //       {...props}
  //       className="pull-quote"
  //       children={getSubformatPullQuoteChildren(children)}
  //     />
  //   );
  // }

  return (
    <blockquote
      className={cn(styles.blockquote, className ?? "")}
      {...restProps}
    >
      {children}
    </blockquote>
  );
}
