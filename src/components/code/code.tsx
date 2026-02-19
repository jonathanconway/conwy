
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { CodeRenderedMermaid } from "./code-rendered-mermaid";
import { CodeSyntax } from "./code-syntax";

type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Code(props: CodeProps) {
  if (props.className?.includes("language-mermaid--svg")) {
    return <CodeRenderedMermaid {...props} />
  }

  return <CodeSyntax {...props} />
}
