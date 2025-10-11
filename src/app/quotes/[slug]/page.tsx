import { Metadata } from "next";

import "@/components";
import { PageLayout, Quote, ResponsiveMdHalf } from "@/components";
import { site } from "@/content";
import * as quotes from "@/content/quotes";
import { Quote as Quote_ } from "@/framework/client";
import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;
  const quoteModule = await import(`@/content/quotes/${params.slug}`);
  const quoteModuleItems = Object.values(quoteModule);
  const quote = quoteModuleItems[0] as Quote_;

  return (
    <PageLayout
      selectedNavPath="/quotes"
      main={
        <ResponsiveMdHalf>
          <Quote quote={quote} />
        </ResponsiveMdHalf>
      }
    />
  );
}

export async function generateStaticParams() {
  const allQuoteMetas = Object.values(quotes);
  return allQuoteMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const quoteModule = await import(`@/content/quotes/${params.slug}`);
  const quote = Object.values(quoteModule)[0] as Quote_;
  const title = quote.text;

  return {
    title: `${site.title} - quote - ${title.toLowerCase()}`,
  };
}
