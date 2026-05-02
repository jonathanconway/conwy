import { Note as Note_ } from "@/framework/client";

import { Breadcrumb } from "../breadcrumb";
import { MainAsideLayout } from "../layouts";
import { MdxContainer } from "../mdx";
import { Stack } from "../stack";
import { Text } from "../text";

import { NoteSource } from "./note-source";

interface NoteProps {
  readonly note: Note_;
}

export function Note(props: NoteProps) {
  const {
    note: { meta, content },
  } = props;

  return (
    <MainAsideLayout
      main={
        <Stack gap={2}>
          <Stack gap={1}>
            <Breadcrumb
              segments={[
                {
                  title: "Notes",
                  url: "/notes",
                },
                {
                  title: meta.source.title,
                },
              ]}
            />

            <NoteSource noteMeta={meta} />
          </Stack>

          <MdxContainer>{content}</MdxContainer>
        </Stack>
      }
    />
  );
}
