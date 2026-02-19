"use client";

import { isString } from "lodash";
import "prismjs";
import Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-mermaid";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from "react";

import "../../../../public/css/prismjs/themes/prism.min.css";

import * as styles from "./code-syntax.css";

type CodeSyntaxProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export function CodeSyntax(props: CodeSyntaxProps) {
  const { className = styles.code, children, ...restProps } = props;
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, []);

  const childrenTrimmed = isString(children) ? children?.trim() : children;

  return (
    <code
      className={className}
      ref={codeRef}
      {...restProps}
      suppressHydrationWarning
    >
      {childrenTrimmed}
    </code>
  );
}
