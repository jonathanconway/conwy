import { Article as Article_ } from "@/framework/client";
import { packageInfo } from "@/package-info";

import { Link } from "../../link";
import { TextSizes } from "../../text";

interface ArticleHeaderHistoryLinkProps {
  readonly article: Article_;
}

export function ArticleHeaderHistoryLink(props: ArticleHeaderHistoryLinkProps) {
  const slug = props.article.meta.slug;
  const repoUrl = packageInfo.repository.url;
  const historyUrl = `${repoUrl}/commits/main/src/content/articles/${slug}/content.mdx`;

  return (
    <Link href={historyUrl} size={TextSizes.xs}>
      History
    </Link>
  );
}
