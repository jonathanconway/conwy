import { orderBy, sortBy, uniq } from "lodash";

import { Post } from "./post";

export function pickAndCombineListItems<T extends Post>(
  itemSets: readonly Record<string, T>[],
): readonly Post[] {
  const items = itemSets.flatMap((itemSet) => Object.values(itemSet));
  const itemsSorted = sortPosts(items);

  return itemsSorted;
}

function sortPosts(posts: readonly Post[]): readonly Post[] {
  return orderBy(posts, "meta.date", "desc");
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
  const postsPinnedSlicedSorted = sortPosts(postsPinnedSliced);

  return postsPinnedSlicedSorted;
}
