import { Checklist } from "@/framework/client";
import { packageInfo } from "@/package-info";

import { Link } from "../../../link";
import { TextSizes } from "../../../text";

interface ChecklistPageHeaderIssueLinkProps {
  readonly checklist: Checklist;
}

export function ChecklistPageHeaderIssueLink(
  props: ChecklistPageHeaderIssueLinkProps,
) {
  const repoUrl = packageInfo.repository.url;
  const newIssueUrl = `${repoUrl}/issues/new?q=state%3Aopen+label%3Achecklist`;

  return (
    <Link href={newIssueUrl} size={TextSizes.xs}>
      Suggest an edit
    </Link>
  );
}
