import {
  MdxContainer,
  Page,
  Redirect as RedirectComponent,
} from "@/components";
import { REDIRECTS, redirectFragment } from "@/content";
import { NextPageProps } from "@/framework";

export async function PageRedirect(props: NextPageProps) {
  const params = await props.params;
  const redirectUrl = REDIRECTS[params.slug];

  return (
    <Page title="Redirecting you now...">
      <MdxContainer>{redirectFragment.content}</MdxContainer>

      <RedirectComponent redirectUrl={redirectUrl} />
    </Page>
  );
}
