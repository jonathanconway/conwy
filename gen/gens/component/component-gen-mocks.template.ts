import { ComponentGenTemplateParams } from "./component-gen-template-params";

export const componentGenMocksTemplate = ({
  componentNameKebab,
  componentPropsMockName,
  componentPropsName,
}: ComponentGenTemplateParams) =>
  `

import { ${componentPropsName} } from "./${componentNameKebab}-props";

export function ${componentPropsMockName}(): ${componentPropsName} {
  return {};
}

`.trim();
