import { ContentType as ContentType_, ContentTypes } from "@/framework/client";

export interface ContentTypeIconProps {
  readonly contentType: ContentType_;
}

export function ContentTypeIcon({ contentType }: ContentTypeIconProps) {
  const contentTypeEmoji = {
    [ContentTypes.Book]: "📕",
    [ContentTypes.Article]: "📄",
    [ContentTypes.Micro]: "🐦",
    [ContentTypes.Work]: "🏢",
    [ContentTypes.Project]: "📁",
  }[contentType];

  return <>{contentTypeEmoji}</>;
}
