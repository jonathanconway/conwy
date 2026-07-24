import { IllustrationLayout } from "@/framework/client";

const size = {
  w: 800,
  h: 337,
};

const staticDiameter = 150;
const margin = (size.h - staticDiameter) / 2;

export const devPostIllustrationLayout: IllustrationLayout = {
  name: "dev-post",
  size,
  slots: {
    static1: {
      position: {
        x: size.w / 2 - staticDiameter / 2 - margin - staticDiameter,
        y: margin,
      },
      size: {
        w: staticDiameter,
        h: staticDiameter,
      },
    },
    static2: {
      position: {
        x: size.w / 2 - staticDiameter / 2,
        y: margin,
      },
      size: {
        w: staticDiameter,
        h: staticDiameter,
      },
    },
    static3: {
      position: {
        x: size.w / 2 + staticDiameter / 2 + margin,
        y: margin,
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
