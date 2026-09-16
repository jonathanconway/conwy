import { CONTENT_TYPE_LABELS_PLURAL } from "@/framework/client";
import { packageInfo } from "@/package-info";

import { Link } from "../../link/link";
import { TextSizes } from "../../text";

import { ContentPageHeaderPart } from "./content-page-header-part";

export const ContentPageHeaderHistoryLink: ContentPageHeaderPart = (props) => {
  const slug = props.content.meta.slug;
  const repoUrl = packageInfo.repository.url;
  const historyUrl = `${repoUrl}/commits/main/src/content/${CONTENT_TYPE_LABELS_PLURAL[props.content.type]}/${slug}/content.mdx`;

  return (
    <Link href={historyUrl} size={TextSizes.xs} showOpenInNew={false}>
      History
    </Link>
  );
};
