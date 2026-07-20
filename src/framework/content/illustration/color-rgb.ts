export interface ColorRgb {
  readonly r: number;
  readonly g: number;
  readonly b: number;

  toString(): string;
}

export function createColorRgbFromRgbObject({
  r,
  g,
  b,
}: {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}): ColorRgb {
  return createColorRgb(r, g, b);
}

export function createColorRgb(r: number, g: number, b: number): ColorRgb {
  return {
    r,
    g,
    b,
    toString() {
      return [r, g, b].join(",");
    },
  };
}

export interface ColorRgba extends ColorRgb {
  readonly a: number;
}

export function createColorRgba(
  r: number,
  g: number,
  b: number,
  a: number,
): ColorRgba {
  return {
    ...createColorRgb(r, g, b),
    a,
    toString() {
      return [r, g, b, `${a * 100}%`].join(",");
    },
  };
}

export function convertColorRgbToColorRgba(
  colorRgb: ColorRgb,
  a: number,
): ColorRgba {
  const { r, g, b } = colorRgb;
  return createColorRgba(r, g, b, a);
}
