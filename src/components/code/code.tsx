"use client";

import { isString } from "lodash";
import Prism from "prismjs";
import "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-mermaid";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from "react";

import "../../../public/css/prismjs/themes/prism.min.css";

import * as styles from "./code.css";

type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Code({ className, children, ...restProps }: CodeProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, []);

  const childrenTrimmed = isString(children) ? children.trim() : children;

  return (
    <code
      className={className ?? styles.code}
      ref={codeRef}
      {...restProps}
      suppressHydrationWarning
    >
      {childrenTrimmed}
    </code>
  );
}
