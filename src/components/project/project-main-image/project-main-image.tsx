import Image from "next/image";

import { ItemMainImage } from "@/components/item";
import { ProjectMeta } from "@/framework/client";

type ImageProps = Omit<Parameters<typeof Image>[0], "src" | "alt">;

interface ProjectMainImageProps extends ImageProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectMainImage(props: ProjectMainImageProps) {
  return <ItemMainImage itemMeta={props.projectMeta} titleKey="slug" />;
}
