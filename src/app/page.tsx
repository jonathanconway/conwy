import { FragmentsAboutMe, PageLayout, RecentArticlesList } from "@/components";
import * as articles from "@/content/articles";
import * as micros from "@/content/micros";
import { sliceAllTopListItems } from "@/framework";

export default function Home() {
  const items = sliceAllTopListItems({
    itemSets: [articles, micros],
    limit: 10,
  });

  return (
    <PageLayout
      main={
        <>
          <FragmentsAboutMe />

          <RecentArticlesList items={items} />
        </>
      }
    />
  );
}
