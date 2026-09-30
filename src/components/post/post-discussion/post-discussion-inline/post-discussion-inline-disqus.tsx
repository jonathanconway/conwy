"use client";

import { DiscussionEmbed } from "disqus-react";
import { usePathname } from "next/navigation";

import { PostMeta, sentenceCase } from "@/framework/client";
import { packageInfo } from "@/package-info";

import { Collapsible } from "../../../collapsible";

import "./post-discussion-inline-disqus.css";

export interface PostDiscussionInlineDisqusProps {
  readonly postMeta: PostMeta;
}

export function PostDiscussionInlineDisqus(
  props: PostDiscussionInlineDisqusProps,
) {
  const path = usePathname();

  return (
    <Collapsible title="Comments">
      <DiscussionEmbed
        shortname="conwy"
        config={{
          url: `${packageInfo.homepage}${path}`,
          identifier: path.replace("/", ""),
          title:
            "title" in props.postMeta
              ? props.postMeta.title
              : sentenceCase(props.postMeta.slug),
        }}
      />
    </Collapsible>
  );
}
