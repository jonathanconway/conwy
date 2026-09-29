import { camelCase } from "lodash";

import { FragmentGenParams } from "./fragment-gen-params";

export interface FragmentGenTemplateParams extends FragmentGenParams {
  readonly nameRootObject: string;
  readonly name: string;
}

export function generateFragmentGenTemplateParams(
  params: FragmentGenParams,
): FragmentGenTemplateParams {
  const { slug, content } = params;
  const nameRootObject = `${camelCase(slug)}Fragment`;

  const name = slug;

  return {
    slug,
    content,

    name,
    nameRootObject,
  };
}
