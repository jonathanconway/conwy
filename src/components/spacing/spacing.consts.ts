import { RemValue } from "@/framework/css";

import { SpacingSize, SpacingSizes } from "./spacing-sizes";

export const spacingRems: Record<SpacingSize, RemValue> = {
  /** 2px */
  [SpacingSizes.XXS]: 0.125,
  /** 4px */
  [SpacingSizes.XS]: 0.25,
  /** 8px */
  [SpacingSizes.S]: 0.5,
  /** 16px */
  [SpacingSizes.M]: 1,
  /** 20px */
  [SpacingSizes.L]: 1.25,
  /** 24px */
  [SpacingSizes.XL]: 1.5,
  /** 32px */
  [SpacingSizes.XXL]: 2,
};
