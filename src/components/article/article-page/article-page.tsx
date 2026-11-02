import { articlesRoute, createArticlesArticleRoute } from "@/app/routes";
import { Article as Article_ } from "@/framework";

import { NavItems } from "../../header";
import { MainAsidePage } from "../../page";
import { Stack } from "../../stack";
import { ArticleBody } from "../article-body";
import { ArticleDiscussion } from "../article-discussion";
import { ArticleImage } from "../article-image";
import { ArticleSidebar } from "../article-sidebar";
import { ArticleSubHeader } from "../article-subheader";
import { ArticleTableOfContents } from "../article-table-of-contents";

export interface ArticlePageProps {
  readonly article: Article_;
}

export function ArticlePage(props: ArticlePageProps) {
  const { article } = props;
  const articleRoute = createArticlesArticleRoute(article);

  return (
    <MainAsidePage
      selectedNavItem={NavItems.Articles}
      breadcrumbSegments={[articlesRoute, { title: articleRoute.title }]}
      title={articleRoute.title}
      subHeaderSlot={<ArticleSubHeader article={article} />}
      mainSlot={
        <Stack gap={1}>
          <ArticleImage article={article} />

          <ArticleTableOfContents article={article} />

          <ArticleBody article={article} />

          <ArticleDiscussion article={article} />
        </Stack>
      }
      asideSlot={<ArticleSidebar article={article} />}
    />
  );
}
