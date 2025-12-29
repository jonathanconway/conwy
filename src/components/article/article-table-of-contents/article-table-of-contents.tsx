import { Article } from "@/framework/client";

import { Collapsible } from "../../collapsible";
import { Link } from "../../link";
import { List } from "../../list";
import { Responsive } from "../../responsive";
import { Breakpoints } from "../../styling";
import { TextSizes } from "../../text";
import { getArticleHeadings } from "../article-headings";

interface ArticleTableOfContentsProps {
  readonly article: Article;
}

export async function ArticleTableOfContents(
  props: ArticleTableOfContentsProps,
) {
  const articleHeadings = await getArticleHeadings(props.article);

  if (articleHeadings.length < 2) {
    return null;
  }

  return (
    <Responsive maxWidth={Breakpoints.md}>
      <Collapsible title="Table of contents">
        <List>
          {articleHeadings.map(({ id, title, shortTitle }) => (
            <li key={id}>
              {/* todo: instead of title, apply tooltip and only show on text overflow */}
              <Link
                id={`${id}-article-link`}
                href={`#${id}`}
                title={title}
                size={TextSizes.sm}
              >
                {shortTitle ?? title}
              </Link>
            </li>
          ))}
        </List>
      </Collapsible>
    </Responsive>
  );
}
