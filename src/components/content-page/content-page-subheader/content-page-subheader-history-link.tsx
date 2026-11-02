import { CONTENT_TYPE_LABELS_PLURAL } from "@/framework";
import { packageInfo } from "@/package-info";

import { Link } from "../../link/link";
import { TextSizes } from "../../text";

import { ContentPageSubHeaderPartProps } from "./content-page-subheader-part-props";

export const ContentPageSubHeaderHistoryLink = (
  props: ContentPageSubHeaderPartProps,
) => {
  const slug = props.content.meta.slug;
  const repoUrl = packageInfo.repository.url;
  const historyUrl = `${repoUrl}/commits/main/src/content/${CONTENT_TYPE_LABELS_PLURAL[props.content.type]}/${slug}/content.mdx`;

  return (
    <Link href={historyUrl} size={TextSizes.XS} showOpenInNew={false}>
      History
    </Link>
  );
};
