import { sentenceCase } from "@/framework";
import { Micro } from "@/framework";

export function generateMicroPageHeaderTitle(micro: Micro) {
  return micro.meta.shortBlurb ?? sentenceCase(micro.meta.slug) + " ...";
}
