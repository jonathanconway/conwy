import { camelCase } from "lodash";

import { IdeaGenParams } from "./idea-gen-params";

export interface IdeaGenTemplateParams extends IdeaGenParams {
  readonly nameRootObject: string;
}

export function generateIdeaGenTemplateParams(
  params: IdeaGenParams,
): IdeaGenTemplateParams {
  const { title, slug, blurb } = params;
  const nameRootObject = `${camelCase(title)}Idea`;

  return {
    title,
    slug,

    blurb,

    nameRootObject,
  };
}
