import { ComponentGenTemplateParams } from "./component.params";

export default ({
  name,
  nameComponent,
  nameComponentProps,
  description,
}: ComponentGenTemplateParams) =>
  `

import { HTMLProps } from "react";

import { cn } from "@/framework/client";

import * as styles from "./${name}.css";

type ${nameComponentProps} = HTMLProps<HTMLDivElement> & {};
 
/**
 * ${description}
 */
export function ${nameComponent}(props: ${nameComponentProps}) {
  const { className = styles.${name}, ...restProps } = props;
  return (
    <div className={className} {...restProps} />
  );
}

`.trim();
