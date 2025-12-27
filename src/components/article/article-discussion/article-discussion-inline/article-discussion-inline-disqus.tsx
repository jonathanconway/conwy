"use client";

import { DiscussionEmbed } from "disqus-react";
import { usePathname } from "next/navigation";

import { ArticleMeta } from "@/framework/client";
import { packageInfo } from "@/package-info";

import { Collapsible } from "../../../collapsible";

import "./article-discussion-inline-disqus.css";

export interface ArticleDiscussionInlineDisqusProps {
  readonly articleMeta: ArticleMeta;
}

export function ArticleDiscussionInlineDisqus(
  props: ArticleDiscussionInlineDisqusProps,
) {
  const articlePath = usePathname();

  return (
    <Collapsible title="Comments">
      <DiscussionEmbed
        shortname="conwy"
        config={{
          url: `${packageInfo.homepage}${articlePath}`,
          identifier: articlePath.replace("/", ""),
          title: props.articleMeta.title,
        }}
      />
    </Collapsible>
  );
}
