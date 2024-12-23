import { flex } from "@jonathanconway/tailwindjs";
import { SvgIconProps } from "@mui/material";
import { FC } from "react";

import { cn } from "@/framework/client";

import * as styles from "./icon.styles";

export function withMaterialIcon(MaterialIcon: FC<SvgIconProps>) {
  return function Icon({ className, ...restProps }: SvgIconProps) {
    return (
      <MaterialIcon
        className={cn(className, styles.iconMaterial)}
        style={styles.iconMaterialStyleOverrides}
        {...restProps}
      />
    );
  };
}
