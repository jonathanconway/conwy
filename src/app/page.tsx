import { Suspense } from "react";

import { AboutMe, ArticlesRecentList, Page, PageLayout } from "@/components";
import * as articlesMap from "@/content/articles";
import * as microsMap from "@/content/micros";
import { getPosts } from "@/framework";

import { homeRoute } from "./routes";

export default function Home() {
  const items = getPosts({
    itemSets: [articlesMap, microsMap],
  });

  return (
    <Suspense>
      <Page>
        <AboutMe />

        <ArticlesRecentList items={items} />
      </Page>
    </Suspense>
  );
}
