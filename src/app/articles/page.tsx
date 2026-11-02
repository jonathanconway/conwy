import { Suspense } from "react";

import { ArticlesPage } from "@/components";
import { site } from "@/content";
import * as articlesMap from "@/content/articles";
import * as microsMap from "@/content/micros";
import { Post, pickAndCombineListItems } from "@/framework";

export default function ArticlesPage_() {
  const posts = pickAndCombineListItems<Post>([articlesMap, microsMap]);

  return (
    <Suspense>
      <ArticlesPage posts={posts} />
    </Suspense>
  );
}

export const metadata = {
  title: `${site.title} - articles`,
};
