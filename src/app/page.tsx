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
    <PageLayout
      main={
        <>
          <AboutMe />

          <ArticlesRecentList items={items} />
        </>
      }
    />
  );
}
