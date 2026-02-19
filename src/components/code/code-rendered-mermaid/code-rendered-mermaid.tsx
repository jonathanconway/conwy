import { usePathname } from "next/navigation";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ImageFigure } from "@/components/image-figure";
import { generateHash, isNotNil } from "@/framework/client";

type CodeRenderedProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export function CodeRenderedMermaid(props: CodeRenderedProps) {
  const currentPathName = usePathname();
  const imagePathName = `/images${currentPathName}`;

  const childrenText = props.children?.toString().trim() ?? "";

  const commentLines = childrenText
    .trim()
    .split("\n")
    .filter(isNotNil)
    .filter((line) => line.startsWith("%% "));
  const descriptionLine = commentLines.find((line) =>
    line.startsWith("%% @description "),
  );
  const description = descriptionLine?.replace("%% @description ", "");

  const mermaidHash = generateHash(childrenText);

  const imageFilename = `mermaid-${mermaidHash}-1.svg`;
  const src = `${imagePathName}/${imageFilename}`;
  const alt = description;
  const title = description;
  const width = "100%";
  const height = "100%";

  return (
    <>
      <ImageFigure
        className=""
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
      />
    </>
  );
}
