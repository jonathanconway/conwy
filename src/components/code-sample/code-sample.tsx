// "use client";

// import { cn } from "@jonathanconway/tailwindjs";
// import { isArray, isString } from "lodash";
// import Prism from "prismjs";
// import "prismjs/components/prism-java";
// import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-jsx";
// import "prismjs/components/prism-mermaid";
// import "prismjs/components/prism-typescript";
// import "prismjs/plugins/line-highlight/prism-line-highlight.css";
// import "prismjs/plugins/line-highlight/prism-line-highlight.js";
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";
// import "prismjs/plugins/line-numbers/prism-line-numbers.js";
// import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from "react";

// import * as styles from "./code-sample.styles";

// export type CodeSampleProps = DetailedHTMLProps<
//   HTMLAttributes<HTMLElement>,
//   HTMLElement
// > & {
//   readonly lineNumbers?: boolean;
//   readonly linesHighlighted?: readonly (number | [number, number])[];
//   readonly language: "java" | "javascript" | "typescript" | "mermaid";
// };

// export function CodeSample({
//   className,
//   children,
//   language,
//   lineNumbers,
//   linesHighlighted,
//   ...restProps
// }: CodeSampleProps) {
//   const codeRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (codeRef.current) {
//       Prism.highlightElement(codeRef.current);
//     }
//   }, []);

//   const childrenTrimmed = isString(children) ? children.trim() : children;

//   const linesHighlightedString =
//     linesHighlighted
//       ?.map((item) => {
//         if (isArray(item)) {
//           return `${item[0]}-${item[1]}`;
//         } else return item.toString();
//       })
//       ?.join(",") ?? "";

//   const lineNumbersClassName = lineNumbers ? "line-numbers" : "";

//   return (
//     <pre
//       className={cn(styles.pre, className ?? "", lineNumbersClassName)}
//       suppressHydrationWarning
//       data-line={linesHighlightedString}
//     >
//       <code
//         className={cn(styles.code, `language-${language}`)}
//         ref={codeRef}
//         {...restProps}
//         suppressHydrationWarning
//       >
//         {childrenTrimmed}
//       </code>
//     </pre>
//   );
// }
