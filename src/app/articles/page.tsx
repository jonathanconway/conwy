import { Suspense } from "react";

import {
  ArticlesList,
  ArticlesTagFilters,
  Fragment,
  PageLayout,
} from "@/components";
import { site } from "@/content";
import * as articles from "@/content/articles";
import { articlesFragment } from "@/content/fragments";
import * as micros from "@/content/micros";
import { Post, pickAndCombineListItems } from "@/framework/client";

export default function Page() {
  const items = pickAndCombineListItems<Post>([articles, micros]);

  return (
    <Suspense>
      <PageLayout
        selectedNavPath="/articles"
        main={
          <>
            <Fragment>
              <articlesFragment.content />
            </Fragment>

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
