import { Many, difference, intersection, pick } from "lodash";

export function getAreAllSame<T>(array1: readonly T[], array2: readonly T[]) {
  if (array1.length !== array2.length) {
    return false;
  }

  const diff = difference([...array1], [...array2]);

  return diff.length === 0;
}

export function getAreSomeSame<T>(array1: readonly T[], array2: readonly T[]) {
  return intersection(array1, array2).length > 0;
}

export function toPicked<T extends object, U extends keyof T>(
  ...props: Array<Many<U>>
) {
  return (item: T) => pick(item, ...props);
}
