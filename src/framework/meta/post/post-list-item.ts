import { orderBy, sortBy, uniq } from "lodash";

import { toPicked } from "@/framework/utils";

import { Post } from "./post";

export function sortByDate<T extends { readonly date: string }>(
  items: readonly T[],
) {
  return orderBy(items, "date", "desc");
}

export function pickAndCombineListItems<T extends Post>(
  itemSets: readonly Record<string, T>[],
): readonly Post[] {
  const items = itemSets.flatMap((itemSet) => Object.values(itemSet));

  const itemsSorted = orderBy(items, "meta.date", "desc");

  const itemsSortedPicked = itemsSorted.map(toPicked("meta"));

  return itemsSortedPicked;
}

export function sliceAllTopListItems({
  itemSets,
  limit,
}: {
  readonly itemSets: readonly Record<string, Post>[];
  limit: number;
}): readonly Post[] {
  const limitAverage = Math.floor(limit / itemSets.length);

  const itemSetsSliced = itemSets.map((itemSet) =>
    Object.fromEntries(Object.entries(itemSet).slice(0, limitAverage)),
  );

  return pickAndCombineListItems(itemSetsSliced);
}

export function getItemsTags(items: readonly Post[]) {
  return sortBy(uniq(items.flatMap((item) => item.meta.tags)));
}
