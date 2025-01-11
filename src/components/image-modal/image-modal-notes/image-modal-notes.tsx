import { cn } from "@/framework/client";

import { UseCarouselResult } from "../../carousel";
import { ImageCarouselItem } from "../use-image-modal.hook";

import * as styles from "./image-modal-notes.css";

interface ImageModalNotesProps {
  readonly carousel: UseCarouselResult<ImageCarouselItem>;
  readonly hasHotspots: boolean;
}

export function ImageModalNotes({
  carousel,
  hasHotspots,
}: ImageModalNotesProps) {
  if (carousel.selectedItem.notes?.length === 0) {
    return null;
  }

  return (
    <ul
      className={
        hasHotspots ? styles.notesContainer : styles.notesContainerWithHotspots
      }
    >
      {carousel.selectedItem.notes?.map((note, noteIndex) => (
        <li
          key={note.text}
          className={cn(
            styles.noteText,
            hasHotspots ? styles.noteTextWithHotspots : null,
          )}
        >
          {note.hotspot && (
            <span className={styles.noteNumber}>{noteIndex + 1}</span>
          )}
          {note.text}
        </li>
      ))}
    </ul>
  );
}
