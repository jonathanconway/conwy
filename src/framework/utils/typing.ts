export type TypeOfConst<Const> = Const[keyof Const];

export function isNotNil<T>(item?: T | undefined | null | false): item is T {
  return Boolean(item);
}

export type Maybe<T> = T | undefined | null;
