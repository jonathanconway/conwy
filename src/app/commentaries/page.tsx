import { CommentariesPage } from "@/components";
import * as content from "@/content";
import { site } from "@/content";
import * as commentariesMap from "@/content/commentaries";
import {
  ContentLinkInfo,
  ContentMap,
  Slug,
  getContentLinkInfo,
} from "@/framework";

const contentMap = content as unknown as ContentMap;
const commentaries = Object.values(commentariesMap);

export default async function CommentariesPage_() {
  const commentarySourceContentLinkInfos: Record<Slug, ContentLinkInfo> =
    Object.fromEntries(
      await Promise.all(
        commentaries.map(async (commentary) => {
          return [
            commentary.meta.source.slug,
            getContentLinkInfo(contentMap, commentary.meta.source),
          ];
        }),
      ),
    );

  return (
    <CommentariesPage
      commentaries={commentaries}
      commentarySourceContentLinkInfos={commentarySourceContentLinkInfos}
    />
  );
}

export const metadata = {
  title: `${site.title} - commentaries`,
};
