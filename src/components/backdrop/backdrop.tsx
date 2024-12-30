import { HTMLProps } from "react";

import { cn } from "@/framework/client";

import * as styles from "./backdrop.css";

type BackdropProps = HTMLProps<HTMLDivElement>;

const BACKDROP_CLASS = "backdrop";

export function isBackdrop(element: HTMLElement) {
  return element.classList.contains(BACKDROP_CLASS);
}

export function Backdrop({ className, ...restProps }: BackdropProps) {
  return (
    <div
      className={cn(className ?? styles.backdrop, BACKDROP_CLASS)}
      {...restProps}
    ></div>
  );
}
