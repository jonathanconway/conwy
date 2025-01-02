import { MdxBlockquoteProps } from "../mdx-blockquote-props";

export type MdxBlockquoteSubformatResult = MdxBlockquoteProps & {
  readonly isPullQuote?: boolean;
  readonly isAside?: boolean;
};
