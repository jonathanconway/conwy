import { Metadata } from "next";

import { PageLayout, Redirect as RedirectComponent } from "@/components";
import { REDIRECTS, site } from "@/content";
import { Redirect as Redirect_ } from "@/content/fragments";

import { PageProps } from "./types";

export function PageRedirect(props: PageProps) {
  const redirectUrl = REDIRECTS[props.params.slug];

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

export async function generateMetadataRedirect({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const redirect = REDIRECTS[slug];
  return {
    title: `${site.title} - redirect - ${redirect}`,
  };
}
