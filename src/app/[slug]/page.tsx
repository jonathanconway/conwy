import { camelCase } from "lodash";
import { Metadata } from "next";

import { REDIRECTS } from "@/content";
import * as pages from "@/content/pages";
import { Page as Page__ } from "@/framework/client";

import { PagePage, generateMetadataPage } from "./page-page";
import { PageRedirect, generateMetadataRedirect } from "./page-redirect";
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

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  if (REDIRECTS[params.slug]) {
    return generateMetadataRedirect({ params: Promise.resolve({ slug: params.slug }) });
  }

  const pagesByName = pages as Record<string, Page__>;
  const pageName = camelCase(params.slug);
  if (pagesByName[pageName]) {
    return generateMetadataPage({ params: Promise.resolve({ slug: params.slug }) });
  }

  throw new Error();
}
