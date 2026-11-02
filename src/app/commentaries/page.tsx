import {
  Commentaries,
  MdxContainer,
  Page,
  ResponsiveMdHalf,
} from "@/components";
import * as content from "@/content";
import { commentariesFragment, site } from "@/content";
import * as commentariesMap from "@/content/commentaries";
import {
  ContentLinkInfo,
  ContentMap,
  Slug,
  getContentLinkInfo,
} from "@/framework";

import { commentariesRoute } from "../routes";

const contentMap = content as unknown as ContentMap;
const commentaries = Object.values(commentariesMap);

export default async function CommentariesPage() {
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
    <Page title={commentariesRoute.title}>
      <ResponsiveMdHalf>
        <MdxContainer>{commentariesFragment.content}</MdxContainer>
      </ResponsiveMdHalf>

      <Commentaries
        commentaries={commentaries}
        commentarySourceContentLinkInfos={commentarySourceContentLinkInfos}
      />
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - commentaries`,
};
