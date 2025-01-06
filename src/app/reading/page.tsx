import { BooksList, Fragment, PageLayout, Stack } from "@/components";
import { site } from "@/content";
import { Reading } from "@/content/fragments";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/reading"
      main={
        <Stack>
          <Fragment>
            <Reading />
          </Fragment>

          <BooksList />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - reading`,
};
