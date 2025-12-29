import { REDIRECTS, site } from "@/content";
import * as pages from "@/content/pages";
import { Page as Page_, importContentBySlug } from "@/framework/client";

import { PagePage } from "./page-page";
import { PageRedirect } from "./page-redirect";
import { PageProps } from "./types";

export default async function Page(props: PageProps) {
  const params = await props.params;
  if (REDIRECTS[params.slug]) {
    return <PageRedirect {...props} />;
  }

  return <PagePage {...props} />;
}

export async function generateStaticParams() {
  const redirectsParams = Object.keys(REDIRECTS).map((slug) => ({
    slug,
  }));

  const pagesParams = Object.values(pages).map((item) => item.meta);

  return [...redirectsParams, ...pagesParams];
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  // Redirects
  // Here because they are top-level paths, same as page paths.
  const redirect = REDIRECTS[params.slug];
  if (redirect) {
    return {
      title: `${site.title} - redirect - ${redirect}`,
    };
  }

  // Pages
  const page = importContentBySlug<Page_>(pages, "page", params.slug);
  const pageTitle = page.meta.title.toLowerCase();
  const title = `${site.title} - pages - ${pageTitle}`;
  return {
    title,
  };
}
