import { Suspense } from "react";

import {
  ArticlesList,
  ArticlesTagFilters,
  MdxContainer,
  PageLayout,
} from "@/components";
import { articlesFragment, site } from "@/content";
import * as articlesMap from "@/content/articles";
import * as microsMap from "@/content/micros";
import { Post, pickAndCombineListItems } from "@/framework/client";

export default function Page() {
  const items = pickAndCombineListItems<Post>([articlesMap, microsMap]);

  return (
    <Suspense>
      <PageLayout
        selectedNavPath="/articles"
        main={
          <>
            <MdxContainer>{articlesFragment.content}</MdxContainer>

            <ArticlesTagFilters items={items} />

            <ArticlesList items={items} />
          </>
        }
      />
    </Suspense>
  );
}

export const metadata = {
  title: `${site.title} - articles`,
};
