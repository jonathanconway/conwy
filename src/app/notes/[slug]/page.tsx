import { Metadata } from "next";

import { ArticleLayout, Note, PageLayout } from "@/components";
import { site } from "@/content";
import * as notes from "@/content/notes";
import { Note as Note_ } from "@/framework/client";

interface PageProps {
  readonly params: { readonly slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const noteModule = await import(`@/content/notes/${slug}`);
  const noteModuleItems = Object.values(noteModule);
  const note = noteModuleItems[0] as Note_;

  return <ArticleLayout main={<Note note={note} />} aside={<></>} />;
}

export async function generateStaticParams() {
  const allMicroMetas = Object.values(notes).map((item) => item.meta);
  return allMicroMetas;
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const microModule = await import(`@/content/notes/${slug}`);
  const micro = Object.values(microModule)[0] as Note_;
  const title = micro.meta.date;

  return {
    title: `${site.title} - note - ${title.toLowerCase()}`,
  };
}
