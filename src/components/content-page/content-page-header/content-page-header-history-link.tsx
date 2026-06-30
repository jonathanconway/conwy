import { CONTENT_TYPES_PLURALIZED } from "@/framework/client";
import { packageInfo } from "@/package-info";

import { Link } from "../../link/link";
import { TextSizes } from "../../text";

import { ContentPageHeaderPart } from "./content-page-header-part";

export const ContentPageHeaderHistoryLink: ContentPageHeaderPart = (props) => {
  const slug = props.content.meta.slug;
  const repoUrl = packageInfo.repository.url;
  const historyUrl = `${repoUrl}/commits/main/src/content/${CONTENT_TYPES_PLURALIZED[props.content.type]}/${slug}/content.mdx`;

  return (
    <Link href={historyUrl} size={TextSizes.xs}>
      History
    </Link>
  );
};
