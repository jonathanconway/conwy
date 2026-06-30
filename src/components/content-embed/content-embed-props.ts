import { ContentType, Slug } from "@/framework/client";

export interface ContentEmbedProps {
  readonly type: ContentType;
  readonly slug: Slug;
}
