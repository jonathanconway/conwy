import {
  commentariesRoute,
  createCommentariesCommentaryRoute,
} from "@/app/routes";
import {
  Commentary as Commentary_,
  ContentLinkInfo,
  getContentLinkInfo,
} from "@/framework";

import { Page } from "../../page";
import { Commentary } from "../commentary";
import { CommentarySource } from "../commentary-source";

interface CommentaryPage {
  readonly commentary: Commentary_;
  readonly sourceLinkInfo: ContentLinkInfo;
}

export function CommentaryPage(props: CommentaryPage) {
  const { commentary, sourceLinkInfo } = props;
  const commentaryRoute = createCommentariesCommentaryRoute(commentary);

  return (
    <Page
      breadcrumbSegments={[commentariesRoute, { title: commentaryRoute.title }]}
      title={
        <CommentarySource
          sourceLink={commentary.meta.source}
          sourceLinkInfo={sourceLinkInfo}
        />
      }
    >
      <Commentary commentary={commentary} />
    </Page>
  );
}
