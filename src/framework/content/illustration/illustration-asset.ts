import { isNotNil } from "@/framework/utils";

import { Illustration } from "./illustration";
import { IllustrationLayout } from "./illustration-layout";

export function createIllustrationAssetFilename(
  illustration: Illustration,
  illustrationLayout: IllustrationLayout,
) {
  return (
    [illustration.slug, illustrationLayout.name].filter(isNotNil).join("--") +
    ".png"
  );
}

export function createIllustrationAssetPathFilename(
  illustration: Illustration,
  illustrationLayout: IllustrationLayout,
) {
  return `public/images/illustrations/${illustration.type}/${createIllustrationAssetFilename(illustration, illustrationLayout)}`;
}

export function createIllustrationAssetUrlPath(
  illustration: Illustration,
  illustrationLayout: IllustrationLayout,
) {
  return `/images/illustrations/${illustration.type}/${createIllustrationAssetFilename(illustration, illustrationLayout)}`;
}
