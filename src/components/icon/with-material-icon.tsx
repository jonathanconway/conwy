import { SvgIconProps } from "@mui/material";
import { FC } from "react";

import * as styles from "./icon.css";
import * as mixins from "./icon.mixins";

export function withMaterialIcon(MaterialIcon: FC<SvgIconProps>) {
  return function Icon(props: SvgIconProps) {
    const { className = styles.iconMaterial, ...restProps } = props;
    return (
      <MaterialIcon
        className={className}
        style={mixins.iconMaterialStyleOverrides}
        {...restProps}
      />
    );
  };
}
