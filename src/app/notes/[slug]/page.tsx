import { Metadata } from "next";

import { ArticleLayout, Note } from "@/components";
import { site } from "@/content";
import * as notes from "@/content/notes";
import { Note as Note_, importContentBySlug } from "@/framework/client";

import { PageProps } from "../../[slug]/types";

export default async function Page(props: PageProps) {
  const params = await props.params;

  const note = importContentBySlug<Note_>(notes, "note", params.slug);

  return <ArticleLayout main={<Note note={note} />} aside={<></>} />;
}

export async function generateStaticParams() {
  const allMicroMetas = Object.values(notes).map((item) => item.meta);
  return allMicroMetas;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const note = importContentBySlug<Note_>(notes, "note", params.slug);

  const noteTitle = note.meta.date.toLowerCase();
  const title = `${site.title} - note - ${noteTitle}`;

  return {
    title,
  };
}
