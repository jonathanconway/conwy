import { cn } from "@jonathanconway/tailwindjs";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import * as styles from "./figure.styles";

type FigureProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Figure(props: FigureProps) {
  const className = cn(props.className ?? "", styles.figure());

  return (
    <>
      <figure {...props} className={className} />
    </>
  );
}
