import { Article } from "@/framework/client";

import { Collapsible } from "../../collapsible";
import { Link } from "../../link";
import { UnorderedList } from "../../list";
import { Responsive } from "../../responsive";
import { Breakpoints } from "../../styling";
import { TextSizes } from "../../text";

interface ArticleTableOfContentsProps {
  readonly article: Article;
}

export async function ArticleTableOfContents(
  props: ArticleTableOfContentsProps,
) {
  const articleHeadings = props.article.meta.extensions?.articleHeadings ?? [];
  if (articleHeadings.length < 2) {
    return null;
  }

  return (
    <Responsive maxWidth={Breakpoints.Medium}>
      <Collapsible title="Table of contents">
        <UnorderedList>
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
        </UnorderedList>
      </Collapsible>
    </Responsive>
  );
}
