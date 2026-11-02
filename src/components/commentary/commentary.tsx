import { Commentary as Commentary_ } from "@/framework";

import { MdxContainer } from "../mdx";
import { ResponsiveMdHalf } from "../responsive";

interface CommentaryProps {
  readonly commentary: Commentary_;
}

export function Commentary(props: CommentaryProps) {
  const {
    commentary: { content },
  } = props;

  return (
    <ResponsiveMdHalf>
      <MdxContainer>{content}</MdxContainer>
    </ResponsiveMdHalf>
  );
}
