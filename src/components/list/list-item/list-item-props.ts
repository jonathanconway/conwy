import { HTMLProps } from "react";

import { ListItemSize } from "./list-item-size";

// import { IconType } from "../../icon";

export type ListItemProps = Omit<HTMLProps<HTMLLIElement>, "size"> & {
  // readonly icon?: IconType; todo

  readonly size?: ListItemSize;
};
