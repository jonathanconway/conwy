import { ContentSidebarContainer } from "../../content-page";
import { MainAsideLayout } from "../../layouts";
import { MdxContainer } from "../../mdx";
import { PostDiscussion } from "../../post";
import { Stack } from "../../stack";

import { MicroPageHeader } from "./micro-page-header";
import { MicroPageProps } from "./micro-page-props";
import { MicroSidebar } from "./micro-page-sidebar";

export function MicroPage(props: MicroPageProps) {
  return (
    <>
      <MainAsideLayout
        main={
          <Stack gap={2}>
            <MicroPageHeader micro={props.micro} />

            <MdxContainer>{props.micro.content}</MdxContainer>

            <PostDiscussion post={props.micro} />
          </Stack>
        }
        aside={
          <ContentSidebarContainer>
            <MicroSidebar micro={props.micro} />
          </ContentSidebarContainer>
        }
      />
    </>
  );
}
