import { ContentType as ContentType_, ContentTypes } from "@/framework/client";

export interface ContentTypeIconProps {
  readonly contentType: ContentType_;
}

export function ContentTypeIcon({ contentType }: ContentTypeIconProps) {
  const contentTypeEmoji = {
    [ContentTypes.Article]: "📄",
    [ContentTypes.Book]: "📕",
    [ContentTypes.Checklist]: "📋",
    [ContentTypes.Colleague]: "🙋",
    [ContentTypes.Commentary]: "📝",
    [ContentTypes.Community]: "👬",
    [ContentTypes.Idea]: "🧠",
    [ContentTypes.Micro]: "🐦",
    [ContentTypes.Page]: "📄",
    [ContentTypes.Project]: "📁",
    [ContentTypes.Prompt]: "🤖",
    [ContentTypes.Quote]: "💬",
    [ContentTypes.Study]: "🎓",
    [ContentTypes.Testimonial]: "🙌",
    [ContentTypes.Tool]: "🛠️",
    [ContentTypes.Work]: "🏢",
  }[contentType];

  return <>{contentTypeEmoji}</>;
}
