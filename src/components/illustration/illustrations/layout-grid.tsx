import { Children, ReactNode } from "react";

interface GridLayoutProps {
  readonly children: ReactNode;
}

/**
 * Illustration: A grid layout component that arranges children in a square grid pattern with automatic sizing.
 */
export function GridLayout(props: GridLayoutProps) {
  const children =
    Children.count(props.children) > 0
      ? (props.children as ReactNode[])
      : [props.children];
  const rows = Math.ceil(Math.sqrt(children.length));
  const rowArray = Array(rows).fill(null);
  const childrenByRowCol = (() => {
    const map: Record<number, Record<number, ReactNode>> = {};
    let index = 0;
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      for (let colIndex = 0; colIndex < rows; colIndex++) {
        map[rowIndex] = map[rowIndex] ?? {};
        map[rowIndex][colIndex] = children[index];
        index++;
        if (!children[index]) {
          break;
        }
      }
      if (!children[index]) {
        break;
      }
    }
    return map;
  })();

  return (
    <>
      {rowArray.map((_, rowIndex) => (
        <>
          {rowArray.map((_, colIndex) => (
            <g
              transform={[
                `translate(${rows * (colIndex === 0 ? 0 : 5 / (colIndex + 1))} ${rows * (rowIndex === 0 ? 0 : 5 / (rowIndex + 1))})`,
                `scale(${1 / rows} ${1 / rows})`,
              ].join(" ")}
              key={`child-${rowIndex}-${colIndex}`}
            >
              {childrenByRowCol?.[rowIndex]?.[colIndex] ?? null}
            </g>
          ))}
        </>
      ))}
    </>
  );
}
