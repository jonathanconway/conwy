import { Metadata } from "next";

import { PageLayout, Redirect as RedirectComponent } from "@/components";
import { REDIRECTS, site } from "@/content";
import { Redirect as Redirect_ } from "@/content/fragments";

import { PageProps } from "./types";

export async function PageRedirect(props: PageProps) {
  const params = await props.params;
  const redirectUrl = REDIRECTS[params.slug];

  return (
    <PageLayout
      main={
        <div>
          <Redirect_ />

          <RedirectComponent redirectUrl={redirectUrl} />
        </div>
      }
    />
  );
}

export async function generateMetadataRedirect(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const redirect = REDIRECTS[params.slug];
  return {
    title: `${site.title} - redirect - ${redirect}`,
  };
}
