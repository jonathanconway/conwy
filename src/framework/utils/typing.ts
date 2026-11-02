export type TypeOfConst<Const> = Const[keyof Const];

export function checkIsNotNil<T>(
  item?: T | undefined | null | false,
): item is T {
  return Boolean(item);
}

export type Maybe<T> = T | undefined | null;

export type MaybeNull<T> = T | null;

export type MaybeUndefined<T> = T | undefined;
