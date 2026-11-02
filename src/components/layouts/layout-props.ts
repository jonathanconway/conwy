import { ReactNode } from "react";

import { Maybe } from "@/framework";

export type LayoutPropsBase<TSlotName extends string = string> = Partial<
  Record<`${TSlotName}Slot`, Maybe<ReactNode>>
>;
