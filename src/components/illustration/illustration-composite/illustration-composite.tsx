import { createIllustrationAssetUrlPath } from "@/framework/client";

import { IllustrationCompositeProps } from "./illustration-composite-props";

export function IllustrationComposite(props: IllustrationCompositeProps) {
  const src = createIllustrationAssetUrlPath(
    props.illustration,
    props.illustrationLayout,
  );
  const style = {
    width: props?.illustrationLayout?.size?.w ?? 400,
    height: props?.illustrationLayout?.size?.h ?? 300,
  };

  return <img style={style} src={src} />;
}
