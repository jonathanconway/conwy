import { Work } from "@/framework";

import { ImageCascade } from "../../image-cascade";

import { generateWorkImages } from "./work-image-cascade.utils";

export interface WorkImageCascadeProps {
  readonly work: Work;
}

export function WorkImageCascade(props: WorkImageCascadeProps) {
  const workImages = generateWorkImages(props.work);
  return <ImageCascade images={workImages} isUrlAddressable />;
}
