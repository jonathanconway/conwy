import { packageInfo } from "@/package-info";

import { Link } from "../../link";
import { TextSizes } from "../../text";

import { ContentPageHeaderPart } from "./content-page-header-part";

export const ContentPageHeaderSuggestEditLink: ContentPageHeaderPart = (
  props,
) => {
  const repoUrl = packageInfo.repository.url;
  const labels = props.content.type;
  const slug = props.content.meta.slug;
  const title = `Suggesting an edit for ${slug}`;
  const params = new URLSearchParams({
    labels,
    title,
  });

  const newIssueUrl = `${repoUrl}/issues/new?${params}`;

  return (
    <Link href={newIssueUrl} size={TextSizes.xs} target="_blank">
      Suggest an edit
    </Link>
  );
};
