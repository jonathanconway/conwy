import { camelCase } from "lodash";

import { PromptGenParams } from "./prompt-gen-params";

export interface PromptGenTemplateParams extends PromptGenParams {
  readonly nameRootObject: string;
  readonly slug: string;
}

export function generatePromptGenTemplateParams(
  params: PromptGenParams,
): PromptGenTemplateParams {
  const { title, content, slug } = params;

  const nameRootObject = `${camelCase(slug)}Prompt`;

  return {
    title,
    content,

    nameRootObject,
    slug,
  };
}
