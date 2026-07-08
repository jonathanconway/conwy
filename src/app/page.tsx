import { Suspense } from "react";

import { AboutMe, ArticlesRecentList, PageLayout } from "@/components";
import * as articles from "@/content/articles";
import * as micros from "@/content/micros";
import { getPosts } from "@/framework/client";

export default function Home() {
  const items = getPosts({
    itemSets: [articles, micros],
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
