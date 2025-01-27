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
  const notes = carousel.selectedItem.notes;

  if (!notes?.length) {
    return null;
  }

  if (notes.length === 1 && !notes[0].hotspot) {
    return <div className={styles.noteText}>{notes[0].text}</div>;
  }

  return (
    <ul
      className={
        hasHotspots ? styles.notesContainer : styles.notesContainerWithHotspots
      }
    >
      {notes?.map((note, noteIndex) => (
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
