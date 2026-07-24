import { Color } from "./color";
import { IllustrationBase } from "./illustration-base";

export interface IllustrationBackground extends IllustrationBase<"background"> {
  readonly colorStops: readonly IllustrationBackgroundColorStop[];
}

export interface IllustrationBackgroundColorStop {
  readonly offset: number;
  readonly color: Color;
}

export const checkIsIllustrationTypeBackground = (
  illustration: IllustrationBase<string>,
): illustration is IllustrationBackground => illustration.type === "background";

export function createIllustrationBackground(
  params: Pick<IllustrationBackground, "slug" | "colorStops" | "size">,
): IllustrationBackground {
  const type = "background";
  const src = `/images/illustrations/${type}/${params.slug}.png`;

  return {
    type,
    src,
    ...params,
  };
}
