import Image from "next/image";

import { WorkMeta } from "@/framework/client";

import { ListItemImage } from "../../list";

type ImageProps = Omit<Parameters<typeof Image>[0], "src" | "alt">;

interface WorkMainImageProps extends ImageProps {
  readonly workMeta: WorkMeta;
}

export function WorkMainImage(props: WorkMainImageProps) {
  return (
    <ListItemImage
      src={`/images/works/${props.workMeta.slug}/${props.workMeta.mainImage ?? "thumbnail.png"}`}
      alt={`Work thumbnail image for ${props.workMeta.client}`}
    />
  );
}
