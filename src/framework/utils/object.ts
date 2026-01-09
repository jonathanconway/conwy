type MapOfArrays<
  TKey extends string | number | symbol,
  TArrayItem,
  TArray extends RelativeIndexable<TArrayItem>,
> = Partial<Record<TKey, TArray>>;

type ReadonlyMapOfArrays<
  TKey extends string | number | symbol,
  TArrayItem,
> = MapOfArrays<TKey, TArrayItem, ReadonlyArray<TArrayItem>>;

export function deepMergeMapsOfArrays<
  TKey extends string | number | symbol,
  TArrayItem,
>(
  objects: readonly ReadonlyMapOfArrays<TKey, TArrayItem>[],
): ReadonlyMapOfArrays<TKey, TArrayItem> {
  const merged: MapOfArrays<TKey, TArrayItem, Array<TArrayItem>> = {};

  const objectsEntriesFlat = objects
    .map((object) => Object.entries(object))
    .flat() as [TKey, readonly TArrayItem[]][];

  for (const [field, values] of objectsEntriesFlat) {
    merged[field] = merged[field] ?? [];
    merged[field].push(...values);
  }

  return merged as ReadonlyMapOfArrays<TKey, TArrayItem>;
}
