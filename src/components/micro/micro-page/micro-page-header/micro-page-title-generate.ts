import { sentenceCase } from "@/framework";
import { Micro } from "@/framework";

export function generateMicroPageTitle(micro: Micro) {
  return micro.meta.shortBlurb ?? sentenceCase(micro.meta.slug) + " ...";
}
