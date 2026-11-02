import { getMdxComponentProps } from "@/framework";

import { LayoutGrid, LayoutGridProps } from "../../../layouts";
import { MdxDivProps } from "../mdx-div-props";

export function MdxDivLayoutGrid(props: MdxDivProps) {
  const mdxProps = getMdxComponentProps<LayoutGridProps>(
    props,
    LayoutGrid.name,
  );
  return <LayoutGrid {...mdxProps}>{props.children}</LayoutGrid>;
}
