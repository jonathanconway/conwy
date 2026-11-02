import { LayoutGridProps } from "./layout-grid-props";
import { createLayoutGridDivProps } from "./layout-grid.utils";

/**
 * Layout that arranges items in an x-y grid.
 */
export function LayoutGrid(props: LayoutGridProps) {
  const { divClassName, divStyle, divRestProps } =
    createLayoutGridDivProps(props);
  return <div className={divClassName} style={divStyle} {...divRestProps} />;
}
