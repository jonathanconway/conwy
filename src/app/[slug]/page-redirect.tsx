import {
  MdxContainer,
  PageLayout,
  Redirect as RedirectComponent,
} from "@/components";
import { REDIRECTS, redirectFragment } from "@/content";

import { PageProps } from "./types";

export async function PageRedirect(props: PageProps) {
  const params = await props.params;
  const redirectUrl = REDIRECTS[params.slug];

  return (
    <PageLayout
      main={
        <div>
          <MdxContainer>{redirectFragment.content}</MdxContainer>

          <RedirectComponent redirectUrl={redirectUrl} />
        </div>
      }
    />
  );
}
