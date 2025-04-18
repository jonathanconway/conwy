import { Metadata } from "next";

import "@/components";
import { PageLayout, QuotesListItem, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as quotes from "@/content/quotes";
import { Quote as Quote_ } from "@/framework/client";

interface PageProps {
  readonly params: { readonly slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const quoteModule = await import(`@/content/quotes/${slug}`);
  const quoteModuleItems = Object.values(quoteModule);
  const quote = quoteModuleItems[0] as Quote_;

  return (
    <PageLayout
      selectedNavPath="/quotes"
      main={
        <ResponsiveMdHalf>
          <QuotesListItem quote={quote} />
        </ResponsiveMdHalf>
      }
    />
  );
}

export async function generateStaticParams() {
  const allQuoteMetas = Object.values(quotes);
  return allQuoteMetas;
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const quoteModule = await import(`@/content/quotes/${slug}`);
  const quote = Object.values(quoteModule)[0] as Quote_;
  const title = quote.text;

  return {
    title: `${site.title} - quote - ${title.toLowerCase()}`,
  };
}
