import {
  Fragment,
  PageLayout,
  QuotesList,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { site } from "@/content";
import { quotesFragment } from "@/content/fragments";

export default function QuotesPage() {
  return (
    <PageLayout
      selectedNavPath="/quotes"
      main={
        <Stack gap={1}>
          <ResponsiveMdHalf>
            <Fragment>
              <quotesFragment.content />
            </Fragment>
          </ResponsiveMdHalf>

          <QuotesList />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - quotes`,
};
