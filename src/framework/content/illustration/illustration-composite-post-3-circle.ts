import { Color } from "./color";
import { Illustration } from "./illustration";
import { IllustrationBase } from "./illustration-base";

export interface IllustrationCompositePost3Circle
  extends IllustrationBase<"composite-post-3-circle"> {
  readonly slots: readonly [Illustration, Illustration, Illustration];
  readonly primaryColor: Color;
}

export const isIllustrationCompositePost3Circle = (
  illustration: IllustrationBase<string>,
): illustration is IllustrationCompositePost3Circle =>
  illustration.type === "composite-post-3-circle";

export function createIllustrationCompositePost3Circle(
  params: Pick<
    IllustrationCompositePost3Circle,
    "slug" | "slots" | "primaryColor"
  >,
): IllustrationCompositePost3Circle {
  const src = `/images/illustrations/composite/${params.slug}.png`;

  return {
    type: "composite-post-3-circle",
    src,
    ...params,
  };
}
