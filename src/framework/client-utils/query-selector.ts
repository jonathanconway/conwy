import { Maybe } from "../utils";

export function querySelector<T extends Element>(selectors: string): Maybe<T> {
  return global.document?.querySelector(selectors) as Maybe<T>;
}
