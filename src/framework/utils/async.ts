import { isObject } from "lodash";

export function isPromise<T>(input: unknown): input is Promise<T> {
  return (
    isObject(input) && "then" in input && "catch" in input && "finally" in input
  );
}

export async function filterAsync<T>(
  input: Array<T>,
  asyncFilterFn: (item: T) => Promise<boolean>,
) {
  const promises = input.map((item) => asyncFilterFn(item));
  const values = await Promise.all(promises);

  const inputFiltered = input.filter((_, inputIndex) => values[inputIndex]);
  return inputFiltered;
}
