import { AboutMe, PageLayout, RecentArticlesList } from "@/components";
import * as articles from "@/content/articles";
import * as micros from "@/content/micros";
import { getPinnedPosts } from "@/framework";

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

          <RecentArticlesList items={items} />
        </>
      }
    />
  );
}
