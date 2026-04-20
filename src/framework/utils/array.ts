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

export function takeUntil<T>(
  array: readonly T[],
  untilFn: (item: T) => boolean,
) {
  const result = [];
  for (const item of array) {
    if (untilFn(item)) {
      break;
    }
    result.push(item);
  }
  return result;
}

export function takeAfter<T>(
  array: readonly T[],
  afterFn: (item: T) => boolean,
) {
  const indexAfter = array.findIndex((item) => afterFn(item));

  if (indexAfter === -1) {
    return [];
  }

  const result = [];
  for (let index = indexAfter + 1; index < array.length; index++) {
    result.push(array[index]);
  }
  return result;
}
