import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ListOrdered } from "../../list";

export type MdxOLProps = DetailedHTMLProps<
  HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export function MdxOl(props: MdxOLProps) {
  const { className, ...restProps } = props;
  return <ListOrdered {...restProps} />;
}
