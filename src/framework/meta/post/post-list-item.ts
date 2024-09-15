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

export function getItemsTags(items: readonly Post[]) {
  return sortBy(uniq(items.flatMap((item) => item.meta.tags)));
}

export function getPinnedPosts({
  itemSets,
  limit,
}: {
  readonly itemSets: readonly Record<string, Post>[];
  readonly limit: number;
}): readonly Post[] {
  const postsAll = itemSets.map((itemSet) => Object.values(itemSet)).flat();
  const postsPinned = postsAll.filter((post) => post.meta.isPinned);
  const postsPinnedSliced = postsPinned.slice(0, limit);

  return postsPinnedSliced;
}
