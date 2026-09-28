import { ContentLinkAndInfo, Slug } from "@/framework/client";

export type ContentsAnchorContentLinkInfos = Record<
  Slug,
  Record<Slug, ContentLinkAndInfo>
>;
