import { isUndefined } from "lodash";

export type PxValue = number;

export type Px<T extends PxValue = PxValue> = `${T}px`;

export function pxs(value?: number): Px | undefined {
  if (isUndefined(value)) {
    return;
  }

  return `${value}px`;
}
