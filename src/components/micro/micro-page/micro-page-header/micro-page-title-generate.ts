import { Micro, sentenceCase } from "@/framework/client";

export function generateMicroPageTitle(micro: Micro) {
  return micro.meta.shortBlurb ?? sentenceCase(micro.meta.slug) + " ...";
}
