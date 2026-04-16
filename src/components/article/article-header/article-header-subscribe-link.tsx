import { Article as Article_ } from "@/framework/client";
import { packageInfo } from "@/package-info";

import { Link } from "../../link";
import { TextSizes } from "../../text";

interface ArticleHeaderSubscribeLinkProps {
  readonly article: Article_;
}

export function ArticleHeaderSubscribeLink(
  props: ArticleHeaderSubscribeLinkProps,
) {
  const subject = encodeURIComponent("Subscribe to Updates");
  const body = encodeURIComponent(
    `Please subscribe me to updates on this article: https://conwy.co/articles/${props.article.meta.slug}`,
  );
  const email = packageInfo.author.email;
  const href = `mailto:${email}?subject=${subject}&body=${body}`;
  return (
    <Link
      href={href}
      size={TextSizes.xs}
      tooltip={{ contents: "Subscribe to updates on this article" }}
    >
      Subscribe
    </Link>
  );
}
