import { ContentLinkAndInfo, Slug } from "@/framework";

export type ContentsAnchorContentLinkInfos = Record<
  Slug,
  Record<Slug, ContentLinkAndInfo>
>;
