import { Metadata } from "next";

import { ArticleLayout, Note } from "@/components";
import { site } from "@/content";
import * as notes from "@/content/notes";
import { Note as Note_ } from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;
  const noteModule = await import(`@/content/notes/${params.slug}`);
  const noteModuleItems = Object.values(noteModule);
  const note = noteModuleItems[0] as Note_;

  return <ArticleLayout main={<Note note={note} />} aside={<></>} />;
}

export async function generateStaticParams() {
  const allMicroMetas = Object.values(notes).map((item) => item.meta);
  return allMicroMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const microModule = await import(`@/content/notes/${params.slug}`);
  const micro = Object.values(microModule)[0] as Note_;
  const title = micro.meta.date.toLowerCase();

  return {
    title: `${site.title} - note - ${title}`,
  };
}
