import { orderBy } from "lodash";

import { Post } from "./post";

export function pickAndCombineListItems<T extends Post>(
  itemSets: readonly Record<string, T>[],
): readonly Post[] {
  const items = itemSets.flatMap((itemSet) => Object.values(itemSet));
  const itemsSorted = sortPosts(items);

  return itemsSorted;
}

function sortPosts(posts: readonly Post[]): readonly Post[] {
  return orderBy(
    posts,
    (post) => post.meta.updatedDate ?? post.meta.createdDate,
    ["desc"],
  );
}

export function getPosts({
  itemSets,
}: {
  readonly itemSets: readonly Record<string, Post>[];
}): readonly Post[] {
  const postsAll = itemSets.map((itemSet) => Object.values(itemSet)).flat();
  const postsSorted = sortPosts(postsAll);

  return postsSorted;
}
