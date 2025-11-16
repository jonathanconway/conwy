import { IllustrationGenTemplateParams } from "./illustration.params";

export default ({
  nameComponent,
  nameComponentProps,
  description,
}: IllustrationGenTemplateParams) =>
  `

import { ReactNode } from "react";

interface ${nameComponentProps} {
  readonly children?: ReactNode;
}
${
  description
    ? `
  /**
   * ${description}
   */
`.trim()
    : ""
}
export function ${nameComponent}({ children }: ${nameComponentProps}) {
  return (
    <>

      <g transform="translate(2.5 2.5) scale(0.5 0.5)">{children}</g>
    </>
  );
}

`.trim();
