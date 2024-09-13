import { ProjectImage, Work, WorkMeta } from "@/framework/client";

export function workImageFullPath({ slug }: WorkMeta) {
  return ({ imageUrl }: ProjectImage) => {
    return `/images/works/${slug}/${imageUrl}`;
  };
}

export function generateWorkImages(work: Work) {
  const workImages = work.meta.images.map((image, imageIndex) => ({
    ...image,
    imageUrl: workImageFullPath(work.meta)(image),
    title: image.title ?? `${work.meta.client} image #${imageIndex + 1}`,
  }));
  return workImages;
}
