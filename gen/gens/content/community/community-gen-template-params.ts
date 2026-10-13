import { camelCase } from "lodash";

import { CommunityCategories } from "@/framework";

import { getEnumName } from "../../../gen-utils";

import { CommunityGenParams } from "./community-gen-params";

export interface CommunityGenTemplateParams extends CommunityGenParams {
  readonly nameRootObject: string;

  readonly categoryEnumName: string;
}

export function generateCommunityGenTemplateParams(
  params: CommunityGenParams,
): CommunityGenTemplateParams {
  const { title, slug, url, shortBlurb, category } = params;

  const nameRootObject = `${camelCase(title)}Community`;

  const categoryEnumName = getEnumName(CommunityCategories, category);

  return {
    title,
    slug,
    url,
    shortBlurb,
    category,
    nameRootObject,
    categoryEnumName,
  };
}
