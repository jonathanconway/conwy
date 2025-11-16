import { ComponentGenTemplateParams } from "./component.params";

export default ({ nameComponentPropsMock }: ComponentGenTemplateParams) =>
  `

export function ${nameComponentPropsMock}() {
  return {
    children: <></>,
  };
}

`.trim();
