import {
  Commentaries,
  MdxContainer,
  PageLayout,
  ResponsiveMdHalf,
} from "@/components";
import { commentariesFragment, site } from "@/content";
import * as notes from "@/content/commentaries";
import { getCommentaryMetas } from "@/framework/client";

export default function Page() {
  const noteMetas = getCommentaryMetas(notes);

  return (
    <PageLayout
      selectedNavPath="/commentaries"
      main={
        <>
          <ResponsiveMdHalf>
            <MdxContainer>{commentariesFragment.content}</MdxContainer>
          </ResponsiveMdHalf>

          <Commentaries commentaryMetas={noteMetas} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - commentaries`,
};
