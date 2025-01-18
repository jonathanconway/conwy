import { MdxBlockquoteProps } from "../mdx-blockquote-props";

export type MdxBlockquoteSubformatResult = MdxBlockquoteProps & {
  readonly isPullQuote?: boolean;
  readonly isSummary?: boolean;
  readonly isAside?: boolean;
};
