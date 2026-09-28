import {
  CONTENT_TYPE_LABELS,
  Commentary as Commentary_,
  ContentLinkInfo,
} from "@/framework/client";

import { Breadcrumb } from "../breadcrumb";
import { MainAsideLayout } from "../layouts";
import { MdxContainer } from "../mdx";
import { Stack } from "../stack";

import { CommentarySource } from "./commentary-source";

interface CommentaryProps {
  readonly commentary: Commentary_;
  readonly sourceLinkInfo: ContentLinkInfo;
}

export function Commentary(props: CommentaryProps) {
  const {
    commentary: {
      meta: { source },
      content,
    },
    sourceLinkInfo,
  } = props;

  return (
    <MainAsideLayout
      main={
        <Stack gap={2}>
          <Stack gap={1}>
            <Breadcrumb
              segments={[
                {
                  title: "Commentaries",
                  url: "/commentaries",
                },
                {
                  title: `${CONTENT_TYPE_LABELS[source.type]}: ${sourceLinkInfo.title}`,
                },
              ]}
            />

            <CommentarySource
              sourceLink={source}
              sourceLinkInfo={sourceLinkInfo}
            />
          </Stack>

          <MdxContainer>{content}</MdxContainer>
        </Stack>
      }
    />
  );
}
