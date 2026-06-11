"use client";

import { MouseEvent } from "react";

import { Link } from "../../link";
import { TextSizes } from "../../text";

import { ChecklistDownloadProps } from "./checklist-download-props";
import { downloadChecklist } from "./checklist-download-utils";

export function ChecklistDownload(props: ChecklistDownloadProps) {
  const slug = props.checklistMeta.slug;

  function handleClickDownloadLink(event: MouseEvent) {
    event.preventDefault();
    downloadChecklist(props.checklistMeta);
  }

  return (
    <div>
      <Link
        href={`/downloads/checklists/${slug}-checklist/${slug}-checklist.md`}
        download
        size={TextSizes.xs}
        onClick={handleClickDownloadLink}
      >
        Download Markdown
      </Link>
    </div>
  );
}
