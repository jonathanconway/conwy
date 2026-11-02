import { articlesRoute } from "@/app/routes";
import { articlesFragment } from "@/content";
import { Post } from "@/framework";

import { NavItems } from "../../header";
import { MdxContainer } from "../../mdx";
import { Page } from "../../page";
import { ResponsiveMdHalf } from "../../responsive";
import { ArticlesList } from "../articles-list";
import { ArticlesTagFilters } from "../articles-tag-filters";

interface ArticlesPageProps {
  readonly posts: readonly Post[];
}

export function ArticlesPage(props: ArticlesPageProps) {
  const { posts } = props;

  return (
    <Page selectedNavItem={NavItems.Articles} title={articlesRoute.title}>
      <MdxContainer>{articlesFragment.content}</MdxContainer>

      <ResponsiveMdHalf>
        <ArticlesTagFilters />
      </ResponsiveMdHalf>

      <ArticlesList posts={posts} />
    </Page>
  );
}
