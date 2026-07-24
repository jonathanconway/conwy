import { IllustrationLayout } from "@/framework/client";

const size = {
  w: 400,
  h: 300,
};
const margin = 32;
const staticDiameter = 125;

export const conwyPostIllustrationLayout: IllustrationLayout = {
  name: "conwy-post",
  size,
  slots: {
    static1: {
      position: {
        x: margin,
        y: margin,
      },
      size: {
        w: staticDiameter,
        h: staticDiameter,
      },
    },
    static2: {
      position: {
        x: size.w - staticDiameter - margin,
        y: margin,
      },
      size: {
        w: staticDiameter,
        h: staticDiameter,
      },
    },
    static3: {
      position: {
        x: size.w / 2 - staticDiameter / 2,
        y: size.h - staticDiameter - margin,
      },
      size: {
        w: staticDiameter,
        h: staticDiameter,
      },
    },
    background: {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        w: "100%",
        h: "100%",
      },
    },
  },
};
