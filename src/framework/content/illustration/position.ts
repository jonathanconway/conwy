import { Percentage } from "./percentage";

export interface Position<T = number | Percentage> {
  readonly x: T;
  readonly y: T;
}
