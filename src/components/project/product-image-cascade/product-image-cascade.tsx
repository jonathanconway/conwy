import { ProjectMeta } from "@/framework/client";

import { ImageCascade } from "../../image-cascade";

import { generateProjectImages } from "./product-image-cascade.utils";

export interface ProjectImageCascadeProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectImageCascade(props: ProjectImageCascadeProps) {
  const projectImages = generateProjectImages(props.projectMeta);
  return <ImageCascade images={projectImages} />;
}
