import {
  MdxContainer,
  PageLayout,
  PromptsList,
  ResponsiveMdHalf,
} from "@/components";
import { site } from "@/content";
import { promptsFragment } from "@/content/fragments";

export default function PromptsPage() {
  return (
    <PageLayout
      selectedNavPath="/prompts"
      main={
        <>
          <ResponsiveMdHalf>
            <MdxContainer>{promptsFragment.content}</MdxContainer>
          </ResponsiveMdHalf>

          <PromptsList />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - prompts`,
};
