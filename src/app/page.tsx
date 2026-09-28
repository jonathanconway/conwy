import { Suspense } from "react";

import { AboutMe, ArticlesRecentList, PageLayout } from "@/components";
import * as articlesMap from "@/content/articles";
import * as microsMap from "@/content/micros";
import { getPosts } from "@/framework/client";

export default function Home() {
  const items = getPosts({
    itemSets: [articlesMap, microsMap],
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
