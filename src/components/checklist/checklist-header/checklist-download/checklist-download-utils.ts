import { ChecklistMeta } from "@/framework/client";

import { CHECKLIST_CONTAINER_CLASS_NAME } from "../../checklist-container/checklist-container.const";
import { CHECKLIST_ITEM_TITLE_CLASS_NAME } from "../../checklist-item/checklist-item-title/checklist-item-title.const";
import { CHECKLIST_SECTION_HEADING_TEXT_CLASS_NAME } from "../../checklist-section/checklist-section-heading/checklist-section-heading.const";

export function downloadChecklist(checklistMeta: ChecklistMeta) {
  const slug = checklistMeta.slug;
  const filename = `${slug}-checklist.md`;
  const checklistMd = generateChecklistMd(checklistMeta);
  const checklistMdBlob = new Blob([checklistMd], { type: "text/plain" });
  triggerDownload(checklistMdBlob, filename);
}

function triggerDownload(blob: Blob, filename: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function generateChecklistMd(checklistMeta: ChecklistMeta) {
  const textLines = [];

  textLines.push(...generateChecklistMdTitle(checklistMeta));

  const checklistBodyEl = document.getElementsByClassName(
    CHECKLIST_CONTAINER_CLASS_NAME,
  )[0];

  const childNodesArray = Array.from(checklistBodyEl.childNodes);
  for (const checklistNode of childNodesArray) {
    if (checklistNode.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    const checklistEl = checklistNode as HTMLElement;
    switch (checklistEl.tagName) {
      case "H3":
      case "H4": {
        textLines.push(...generateChecklistMdHeading(checklistEl));
        break;
      }
      case "UL":
        textLines.push(...generateChecklistMdList(checklistEl));
        break;
    }
  }

  return textLines.join("\n");
}

function generateChecklistMdTitle(checklistMeta: ChecklistMeta) {
  return [`# ${checklistMeta.title} checklist`, ""];
}

function getHeadingTextContent(checklistEl: HTMLElement) {
  return checklistEl.getElementsByClassName(
    CHECKLIST_SECTION_HEADING_TEXT_CLASS_NAME,
  )[0]?.childNodes[0].textContent;
}

function generateChecklistMdHeading(checklistEl: HTMLElement) {
  const headingLevel = Number(checklistEl.tagName.split("H")[1]);
  const headingLevelPrefix = "#".repeat(headingLevel - 1);

  const headingTextContent = getHeadingTextContent(checklistEl);

  return [`${headingLevelPrefix} ${headingTextContent}`, ""];
}

function generateChecklistMdList(checklistEl: HTMLElement) {
  const checklistNodeLiEls = Array.from(checklistEl.querySelectorAll("li"));
  if (checklistNodeLiEls.length === 0) {
    return [];
  }

  const textLines = [];
  for (const checklistNodeLiEl of checklistNodeLiEls) {
    textLines.push(generateChecklistMdListItem(checklistNodeLiEl));
  }
  textLines.push("");
  return textLines;
}

function generateChecklistMdListItem(checklistNodeLiEl: HTMLElement) {
  const checklistItemInput = checklistNodeLiEl.getElementsByTagName(
    "INPUT",
  )[0] as HTMLInputElement;
  const checklistItemTitle = checklistNodeLiEl.getElementsByClassName(
    CHECKLIST_ITEM_TITLE_CLASS_NAME,
  )[0]?.textContent;
  if (!checklistItemTitle) {
    return [];
  }
  const checklistItemCheckedMd = checklistItemInput.checked ? "x" : " ";
  return [`- [${checklistItemCheckedMd}] ${checklistItemTitle}`];
}
