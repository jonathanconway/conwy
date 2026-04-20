import { MdxPProps } from "./mdx-p-props";
import "./mdx-p.css";

export function MdxP(props: MdxPProps) {
  const { noteId, ...restProps } = props;

  return <p {...restProps} />;
}
