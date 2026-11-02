import { isUndefined } from "lodash";

export type RemValue = number;

export type Rem<T extends RemValue = RemValue> = `${T}rem`;

export function rems(value?: number): Rem | undefined {
  if (isUndefined(value)) {
    return;
  }

  return `${value}rem`;
}
