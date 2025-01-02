import { Image, ProjectMeta } from "@/framework/client";

export function generateProjectImageFullPath({ slug }: ProjectMeta) {
  return ({ src }: Image) => {
    return `/images/projects/${slug}/${src}`;
  };
}

function generateProjectImageAlt(
  { title }: ProjectMeta,
  { alt }: Image,
  imageIndex: number,
) {
  return alt ?? `${title} image #${imageIndex + 1}`;
}

export function generateProjectImages(projectMeta: ProjectMeta) {
  const projectImages = projectMeta.images.map((image, imageIndex) => ({
    ...image,
    src: generateProjectImageFullPath(projectMeta)(image),
    alt: generateProjectImageAlt(projectMeta, image, imageIndex),
  }));
  return projectImages;
}
