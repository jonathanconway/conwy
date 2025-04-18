import { MDXContent } from "mdx/types";

import { NoteMeta } from "./note-meta";

export async function getNoteContent({ slug }: NoteMeta): Promise<MDXContent> {
  return (await import(`@/content/notes/${slug}/content.mdx`)).default;
}
