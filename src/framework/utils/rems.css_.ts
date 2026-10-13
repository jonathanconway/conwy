export type RemValue = number;

export type Rem<T extends RemValue = RemValue> = `${T}rem`;

export function rems(value?: number): Rem | undefined {
  if (!value) {
    return;
  }

  return `${value}rem`;
}
