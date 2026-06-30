"use client";

import { MouseEvent } from "react";

import {
  TrackingEvents,
  cn,
  createTrackingClassName,
} from "@/framework/client";

import { IconTypes } from "../../../icon";
import { Link } from "../../../link";
import * as linkStyles from "../../../link/link.css";
import { Stack, StackDirections, StackDistributions } from "../../../stack";
import { TextSizes } from "../../../text";
import { useTooltip } from "../../../tooltip";

import { ChecklistDownloadProps } from "./checklist-download-props";
import {
  downloadChecklist,
  generateChecklistMd,
} from "./checklist-download-utils";

export function ChecklistDownload(props: ChecklistDownloadProps) {
  const slug = props.checklistMeta.slug;
  const trackingId = `${slug}-checklist`;

  const copyTooltip = useTooltip();

  function handleClickDownloadLink(event: MouseEvent) {
    event.preventDefault();
    downloadChecklist(props.checklistMeta);
  }

  function handleClickCopyLink(event: MouseEvent) {
    event.preventDefault();
    navigator.clipboard.writeText(generateChecklistMd(props.checklistMeta));
    copyTooltip.showNotification("Copied");
  }

  return (
    <Stack
      direction={StackDirections.Row}
      distribution={StackDistributions.Flow}
      gap={0.5}
    >
      <Link
        href={`/downloads/checklists/${slug}-checklist/${slug}-checklist.md`}
        download
        size={TextSizes.xs}
        aria-label={`Download ${props.checklistMeta.title} checklist as Markdown`}
        className={cn(
          linkStyles.link,
          createTrackingClassName(
            TrackingEvents.Click,
            `${trackingId}-download-md`,
          ),
        )}
        onClick={handleClickDownloadLink}
      >
        Download Markdown
      </Link>

      <Link
        id={copyTooltip.targetId}
        tooltip={copyTooltip}
        href="#"
        icon={IconTypes.Copy}
        size={TextSizes.xs}
        aria-label={`Copy ${props.checklistMeta.title} checklist as Markdown`}
        className={cn(
          linkStyles.link,
          createTrackingClassName(
            TrackingEvents.Click,
            `${trackingId}-copy-md`,
          ),
        )}
        onClick={handleClickCopyLink}
      >
        Copy Markdown
      </Link>
    </Stack>
  );
}
