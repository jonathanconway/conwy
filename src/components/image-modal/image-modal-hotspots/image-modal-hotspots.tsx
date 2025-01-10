import { UseCarouselResult } from "../../carousel";
import { ImageCarouselItem } from "../use-image-modal.hook";

import * as styles from "./image-modal-hotspots.css";

interface ImageModalHotspotsProps {
  readonly carousel: UseCarouselResult<ImageCarouselItem>;
}

export function ImageModalHotspots(props: ImageModalHotspotsProps) {
  return (
    <>
      {props.carousel.selectedItem.notes
        .filter((note) => note.hotspot)
        .map((note, noteIndex) => (
          <span
            key={note.text}
            className={styles.noteHotspot}
            style={{
              left: note.hotspot!.x,
              top: note.hotspot!.y,
            }}
          >
            {noteIndex + 1}
          </span>
        ))}
    </>
  );
}
