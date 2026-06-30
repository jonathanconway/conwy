import { packageInfo } from "@/package-info";

import { Link } from "../../link";
import { TextSizes } from "../../text";

import { ContentPageHeaderPart } from "./content-page-header-part";

export const ContentPageHeaderSuggestEditLink: ContentPageHeaderPart = (
  props,
) => {
  const repoUrl = packageInfo.repository.url;
  const newIssueUrl = `${repoUrl}/issues/new?q=state%3Aopen+label%3Achecklist`;

  return (
    <Link href={newIssueUrl} size={TextSizes.xs}>
      Suggest an edit
    </Link>
  );
};
