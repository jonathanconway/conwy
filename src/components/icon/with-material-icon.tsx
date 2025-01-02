import { flex } from "@jonathanconway/tailwindjs";
import { SvgIconProps } from "@mui/material";
import { FC } from "react";

import { cn } from "@/framework/client";

import * as styles from "./icon.css";
import * as mixins from "./icon.mixins";

export function withMaterialIcon(MaterialIcon: FC<SvgIconProps>) {
  return function Icon({ className, ...restProps }: SvgIconProps) {
    return (
      <MaterialIcon
        className={cn(className, styles.iconMaterial)}
        style={mixins.iconMaterialStyleOverrides}
        {...restProps}
      />
    );
  };
}
