import { ComponentGenTemplateParams } from "./component-gen-template-params";

export const componentGenTsxTemplate = ({
  componentNameCamel,
  componentNameKebab,
  componentName,
  componentPropsName,
  description,
}: ComponentGenTemplateParams) =>
  `
import * as styles from "./${componentNameKebab}.css";
import { ${componentPropsName} } from "./${componentNameKebab}-props";

/**
 * ${description}
 */
export function ${componentName}(props: ${componentPropsName}) {
  const { className = styles.${componentNameCamel}, ...restProps } = props;
  return (<div className={className} {...restProps} />);
}

`.trim();
