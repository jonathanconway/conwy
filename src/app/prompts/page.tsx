import {
  MdxContainer,
  PageLayout,
  PromptsList,
  ResponsiveMdHalf,
} from "@/components";
import { promptsFragment, site } from "@/content";

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
