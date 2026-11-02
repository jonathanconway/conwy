import { camelCase, kebabCase } from "lodash";

import { titleCase } from "@/framework";

import { ComponentGenParams } from "./component-gen-params";

export interface ComponentGenTemplateParams extends ComponentGenParams {
  readonly componentNameKebab: string;
  readonly componentNameCamel: string;
  readonly componentPropsName: string;
  readonly componentPropsMockName: string;
  readonly componentStoryPath: string;
}

export function generateComponentGenTemplateParams(
  params: ComponentGenParams,
): ComponentGenTemplateParams {
  const { componentName, path = params.componentName } = params;

  const componentNameKebab = kebabCase(componentName);
  const componentNameCamel = camelCase(componentName);
  const componentPropsName = `${componentName}Props`;
  const componentPropsMockName = `${componentPropsName}Mock`;

  const componentStoryPath = path.split("/").map(titleCase).join("/").trim();

  return {
    componentName,
    componentNameKebab,
    componentNameCamel,
    componentPropsName,
    componentPropsMockName,
    componentStoryPath,
  };
}
