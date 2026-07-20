import { Color } from "./color";
import { IllustrationBase } from "./illustration-base";

export interface IllustrationStatic extends IllustrationBase<"static"> {
  readonly scalingAdjustmentFactor?: number;
  readonly primaryColor?: Color;
}

export const isIllustrationStatic = (
  illustration: IllustrationBase<string>,
): illustration is IllustrationStatic => illustration.type === "static";

export function createIllustrationStatic(
  params: Pick<
    IllustrationStatic,
    "slug" | "scalingAdjustmentFactor" | "primaryColor"
  >,
): IllustrationStatic {
  const src = `/images/illustrations/static/${params.slug}.png`;

  return {
    type: "static",
    src,
    ...params,
  };
}
