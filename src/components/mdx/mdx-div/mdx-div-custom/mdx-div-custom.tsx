import { camelCase } from "lodash";

import { MdxDivCustomProps } from "./mdx-div-custom-props";
import { MdxDivCustomTypeComponent } from "./mdx-div-custom-type-component";
import { MdxInputCustomType } from "./mdx-input-custom-types";

export function MdxDivCustom(props: MdxDivCustomProps) {
  const { "data-mdx-custom": customType } = props;
  const Component = MdxDivCustomTypeComponent[customType as MdxInputCustomType];

  if (!Component) {
    return null;
  }

  const componentProps: Record<string, any> = {};
  for (const propKey in props) {
    if (propKey.startsWith(`data-mdx-custom-${customType}-`)) {
      const propKeyCustomPart = propKey.replace(
        `data-mdx-custom-${customType}-`,
        "",
      );
      const propKeyFieldName = camelCase(propKeyCustomPart);

      const propValue = String((props as any)[propKey]);

      try {
        const propValueJSON = JSON.parse(propValue);
        componentProps[propKeyFieldName] = propValueJSON;
      } catch {
        componentProps[propKeyFieldName] = propValue;
      }
    }
  }

  return <Component {...componentProps}>{props.children}</Component>;
}
