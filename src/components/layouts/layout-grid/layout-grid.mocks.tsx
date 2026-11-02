import { Box } from "../../box";

import { LayoutGridProps } from "./layout-grid-props";

export function createLayoutGridPropsMock(): LayoutGridProps {
  return {
    gridWidth: 2,
    children: (
      <>
        <Box />
        <Box />
        <Box />
        <Box />
      </>
    ),
  };
}
