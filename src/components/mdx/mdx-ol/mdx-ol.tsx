import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ListOrdered } from "@/components/list";

export type MdxOLProps = DetailedHTMLProps<
  HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export function MdxOl(props: MdxOLProps) {
  return <ListOrdered {...props} />;
}
