import { style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import * as imageFigureStyles from "../../image-figure/image-figure.css";

export const imageFigure = cn(
  imageFigureStyles.container,
  style({
    width: "100%",
  }),
);
