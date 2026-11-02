import { packageInfo } from "@/package-info";

import { Link } from "../../link";
import { TextSizes } from "../../text";

import { ContentPageSubHeaderPartProps } from "./content-page-subheader-part-props";

export function ContentPageSubHeaderSuggestEditLink(
  props: ContentPageSubHeaderPartProps,
) {
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
    <Link href={newIssueUrl} size={TextSizes.XS} showOpenInNew={false}>
      Suggest an edit
    </Link>
  );
}
