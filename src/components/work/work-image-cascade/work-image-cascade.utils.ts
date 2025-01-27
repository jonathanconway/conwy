import { Image, Work, WorkMeta } from "@/framework/client";

export function workImageFullPath({ slug }: WorkMeta) {
  return ({ src }: Image) => {
    return `/images/works/${slug}/${src}`;
  };
}

export function generateWorkImages(work: Work) {
  const workImages = work.meta.images.map((image) => ({
    ...image,
    src: workImageFullPath(work.meta)(image),
  }));
  return workImages;
}
