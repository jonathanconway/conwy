"use client";

import { TextSizes } from "@/components/text";

import { Link } from "../../link";

import { ChecklistDownloadProps } from "./checklist-download-props";

export function ChecklistDownload(props: ChecklistDownloadProps) {
  const slug = props.checklistMeta.slug;
  return (
    <Link
      href={`/downloads/checklists/${slug}/${slug}-checklist.md`}
      download
      size={TextSizes.xs}
    >
      Download Markdown
    </Link>
  );
}
