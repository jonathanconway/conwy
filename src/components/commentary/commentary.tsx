import { Commentary as Commentary_ } from "@/framework/client";

import { Breadcrumb } from "../breadcrumb";
import { MainAsideLayout } from "../layouts";
import { MdxContainer } from "../mdx";
import { Stack } from "../stack";

import { CommentarySource } from "./commentary-source";

interface CommentaryProps {
  readonly commentary: Commentary_;
}

export function Commentary(props: CommentaryProps) {
  const {
    commentary: { meta, content },
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
                  title: meta.source.title,
                },
              ]}
            />

            <CommentarySource commentaryMeta={meta} />
          </Stack>

          <MdxContainer>{content}</MdxContainer>
        </Stack>
      }
    />
  );
}
