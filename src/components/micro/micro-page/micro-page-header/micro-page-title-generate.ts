import { Micro, sentenceCase } from "@/framework/client";

export function generateMicroPageTitle(micro: Micro) {
  return sentenceCase(micro.meta.slug) + " ...";
}
