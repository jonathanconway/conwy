import { MdxWrapper, Notes, PageLayout, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import { notesFragment } from "@/content/fragments";
import * as notes from "@/content/notes";
import { getNoteMetas } from "@/framework/client";

export default function Page() {
  const noteMetas = getNoteMetas(notes);

  return (
    <PageLayout
      selectedNavPath="/notes"
      main={
        <>
          <ResponsiveMdHalf>
            <MdxWrapper>{notesFragment.content}</MdxWrapper>
          </ResponsiveMdHalf>

          <Notes noteMetas={noteMetas} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - commentaries`,
};
