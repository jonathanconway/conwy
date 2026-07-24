import { Color } from "./color";
import { Illustration } from "./illustration";
import { IllustrationBase } from "./illustration-base";
import { IllustrationLayout } from "./illustration-layout";

export interface IllustrationComposite<
  TIllustrationLayout extends IllustrationLayout = IllustrationLayout,
> extends IllustrationBase<"composite"> {
  readonly illustrations: {
    [key in keyof TIllustrationLayout["slots"]]: Illustration;
  };
  readonly primaryColor?: Color;
}

export const checkIsIllustrationTypeComposite = (
  illustration: IllustrationBase<string>,
): illustration is IllustrationComposite => illustration.type === "composite";

export function createIllustrationComposite<
  TIllustrationLayout extends IllustrationLayout,
>(
  params: Pick<
    IllustrationComposite<TIllustrationLayout>,
    "slug" | "illustrations" | "primaryColor" | "size"
  >,
): IllustrationComposite<TIllustrationLayout> {
  const src = `/images/illustrations/composite/${params.slug}.png`;

  return {
    type: "composite",
    src,
    ...params,
  };
}
