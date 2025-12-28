import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

import { sentenceCase } from "@/framework/client";

export function getMdxPreValues({
  children,
}: {
  readonly children?: ReactNode;
}) {
  const childrenClassName = (
    (children as ReactElement).props as DetailedHTMLProps<
      HTMLAttributes<HTMLElement>,
      HTMLElement
    >
  )?.className;

  const languageClassName = childrenClassName
    ?.split(" ")
    .find((classNamePart) => classNamePart.startsWith("language-"))
    ?.split("language-")[1];

  const language = languageClassName
    ? sentenceCase(languageClassName)
    : undefined;
  return { language };
}
