import { HTMLProps } from "react";

// import { IconType } from "../../icon";

export type ListItemProps = HTMLProps<HTMLLIElement> & {
  // readonly icon?: IconType; todo
  readonly noSpacing?: boolean;
  readonly small?: boolean;
};
