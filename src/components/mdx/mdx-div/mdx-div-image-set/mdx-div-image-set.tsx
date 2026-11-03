import { ReactElement } from "react";

import { Image, getMdxComponentProps } from "@/framework";

import { ImageSet } from "../../../image-set";
import { LayoutGrid, LayoutGridProps } from "../../../layouts";
import { MdxDivProps } from "../mdx-div-props";

export function MdxDivImageSet(props: MdxDivProps) {
  const mdxProps = getMdxComponentProps<LayoutGridProps>(
    props,
    LayoutGrid.name,
  );

  const children = props.children as ReactElement[];

  const images = children
    .filter((child: any) => "src" in child.props && "alt" in child.props)
    .map((child) => child.props as Image);

  return <ImageSet images={images} {...mdxProps} />;
}
