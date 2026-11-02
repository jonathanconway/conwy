import { commentariesRoute } from "@/app/routes";
import {
  Commentaries,
  MdxContainer,
  Page,
  ResponsiveMdHalf,
} from "@/components";
import { commentariesFragment } from "@/content";
import { Commentary as Commentary_, ContentLinkInfo, Slug } from "@/framework";

interface CommentariesPageProps {
  readonly commentaries: Commentary_[];
  readonly commentarySourceContentLinkInfos: Record<Slug, ContentLinkInfo>;
}

export function CommentariesPage(props: CommentariesPageProps) {
  const { commentaries, commentarySourceContentLinkInfos } = props;

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
