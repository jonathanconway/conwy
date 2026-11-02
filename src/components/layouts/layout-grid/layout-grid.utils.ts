import { omit } from "lodash";

import { rems } from "@/framework/css";

import { LayoutGridProps } from "./layout-grid-props";
import * as styles from "./layout-grid.css";

export function createLayoutGridDivProps(props: LayoutGridProps) {
  const {
    className: divClassName = styles.layoutGrid,
    gap = 1,
    ...divRestProps
  } = omit(props, ["gridWidth", "gridHeight"]);

  const divStyleGap = { gap: rems(gap) };

  const divStyleTemplate = createLayoutGridDivTemplateProps(props);

  const divStyle = {
    ...divStyleGap,
    ...divStyleTemplate,
  };

  return { divClassName, divStyle, divRestProps };
}

function createLayoutGridDivTemplateProps(props: LayoutGridProps) {
  switch (true) {
    case "gridHeight" in props:
      return {
        gridTemplateRows: `repeat(${props.gridHeight}, minmax(0, 1fr))`,
      };
    default:
    case "gridWidth" in props:
      return {
        gridTemplateColumns: `repeat(${props.gridWidth ?? 2}, minmax(0, 1fr))`,
      };
  }
}
