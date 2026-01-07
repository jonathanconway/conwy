import {
  MdxWrapper,
  PageLayout,
  Redirect as RedirectComponent,
} from "@/components";
import { REDIRECTS } from "@/content";
import { redirectFragment } from "@/content/fragments";

import { PageProps } from "./types";

export async function PageRedirect(props: PageProps) {
  const params = await props.params;
  const redirectUrl = REDIRECTS[params.slug];

  return (
    <PageLayout
      main={
        <div>
          <MdxWrapper>{redirectFragment.content}</MdxWrapper>

          <RedirectComponent redirectUrl={redirectUrl} />
        </div>
      }
    />
  );
}
