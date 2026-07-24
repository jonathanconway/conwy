import { Position } from "./position";
import { Size } from "./size";

export interface IllustrationLayout {
  readonly name: string;
  readonly slots: Record<string, IllustrationLayoutSlot>;
  readonly size: Size<number>;
}

export interface IllustrationLayoutSlot {
  readonly position: Position;
  readonly size: Size;
}
