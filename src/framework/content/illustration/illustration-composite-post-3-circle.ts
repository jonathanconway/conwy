import { Color as ColorCoreColor } from "color-core";

import { Color } from "./color";
import { createColorRgbFromRgbObject } from "./color-rgb";
import { createIllustrationBackground } from "./illustration-background";
import {
  IllustrationComposite,
  createIllustrationComposite,
} from "./illustration-composite";
import {
  IllustrationLayout,
  IllustrationLayoutSlot,
} from "./illustration-layout";
import { IllustrationStatic } from "./illustration-static";

interface IllustrationLayoutPost3CircleLayout extends IllustrationLayout {
  readonly slots: {
    readonly background: IllustrationLayoutSlot;
    readonly static1: IllustrationLayoutSlot;
    readonly static2: IllustrationLayoutSlot;
    readonly static3: IllustrationLayoutSlot;
  };
}

export interface IllustrationCompositePost3Circle
  extends IllustrationComposite<IllustrationLayoutPost3CircleLayout> {}

export function createIllustrationCompositePost3Circle(params: {
  readonly slug: string;
  readonly primaryColor: Color;
  readonly illustrations: readonly [
    IllustrationStatic,
    IllustrationStatic,
    IllustrationStatic,
  ];
}): IllustrationComposite {
  const canvasSize = {
    w: 400,
    h: 300,
  };

  const primaryColorRgb = createColorRgbFromRgbObject(
    new ColorCoreColor(params.primaryColor).toRgb(),
  );

  const background = createIllustrationBackground({
    slug: `${params.slug}--bg`,
    size: {
      w: "100%",
      h: "100%",
    },
    colorStops: [
      {
        color: `rgba(${primaryColorRgb}, 0)`,
        offset: 0,
      },
      {
        color: `rgba(${primaryColorRgb}, 0.25)`,
        offset: 1,
      },
    ],
  });

  const illustrations = {
    background,
    static1: params.illustrations[0],
    static2: params.illustrations[1],
    static3: params.illustrations[2],
  };

  return createIllustrationComposite<IllustrationLayoutPost3CircleLayout>({
    illustrations,
    slug: params.slug,
    primaryColor: params.primaryColor,
    size: canvasSize,
  });
}
