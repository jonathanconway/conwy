import { ArticlesList, Fragment, PageLayout, TagFilters } from "@/components";
import { site } from "@/content";
import * as articles from "@/content/articles";
import { Articles as Articles_ } from "@/content/fragments";
import * as micros from "@/content/micros";
import { Post, pickAndCombineListItems } from "@/framework";

export default function Page() {
  const items = pickAndCombineListItems<Post>([articles, micros]);

  return (
    <PageLayout
      selectedNavPath="/articles"
      main={
        <>
          <Fragment>
            <Articles_ />
          </Fragment>

          <TagFilters items={items} />

          <ArticlesList items={items} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - articles`,
};
