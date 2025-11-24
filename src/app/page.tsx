import { Suspense } from "react";

import { AboutMe, ArticlesRecentList, PageLayout } from "@/components";
import * as articles from "@/content/articles";
import * as micros from "@/content/micros";
import { getPinnedPosts } from "@/framework/client";

export default function Home() {
  const items = getPinnedPosts({
    itemSets: [articles, micros],
    limit: 10,
  });

  return (
    <Suspense>
      <PageLayout
        main={
          <>
            <AboutMe />

            <ArticlesRecentList items={items} />
          </>
        }
      />
    </Suspense>
  );
}
