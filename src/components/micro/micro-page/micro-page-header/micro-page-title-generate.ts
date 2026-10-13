import { sentenceCase } from "@/framework";
import { Micro } from "@/framework/client";

export function generateMicroPageTitle(micro: Micro) {
  return micro.meta.shortBlurb ?? sentenceCase(micro.meta.slug) + " ...";
}
