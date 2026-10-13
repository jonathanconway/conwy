import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { Props } from "@/framework";

import { SvgProps } from "./icon-svg-props";
import * as styles from "./icon.css";
import * as mixins from "./icon.mixins";

export function withMaterialIcon(
  MaterialIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  },
) {
  return function Icon(props: SvgProps) {
    const { className = styles.iconMaterial, ...restProps } = props;
    return (
      <MaterialIcon
        className={className}
        style={mixins.iconMaterialStyleOverrides}
        {...(restProps as Props<typeof MaterialIcon>)}
      />
    );
  };
}
