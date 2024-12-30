"use client";

import Image from "next/image";

import { WorkImage, cn } from "@/framework/client";

import { Backdrop } from "../backdrop";
import { CarouselNav } from "../carousel";
import { Heading } from "../heading";
import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";
import { Link } from "../link";

import * as styles from "./image-modal.css";
import { useImageModal } from "./use-image-modal.hook";

interface ImageModalProps {
  readonly workImages: readonly WorkImage[];
  readonly defaultSelectedWorkImage: WorkImage;

  readonly onClose: VoidFunction;
}

// todo: break down

export function ImageModal(props: ImageModalProps) {
  const { carousel, hasHotspots, handleBackdropClick } = useImageModal(props);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <div className={styles.imageModal}>
        <header className={styles.imageModalHeader}>
          {carousel.selectedItem.title && (
            <Heading level={2} className={styles.imageModalTitle}>
              {carousel.selectedItem.title}
            </Heading>
          )}

          <div className={styles.imageModalButtonsContainer}>
            <CarouselNav carousel={carousel} tabTooltipDescription="Image" />

            <IconButton
              icon={IconTypes.Close}
              tooltip={{ contents: "Close" }}
              onClick={props.onClose}
            />
          </div>
        </header>

        <div className={styles.imageModalMain}>
          <div className={styles.imageContainer}>
            <Link
              href={carousel.selectedItem.imageUrl}
              target="_blank"
              showOpenInNew={false}
            >
              <Image
                className={styles.image}
                src={carousel.selectedItem.imageUrl}
                alt={carousel.selectedItem.imageUrl}
                width={600}
                height={400}
              />
            </Link>

            {carousel.selectedItem.notes
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
          </div>

          {carousel.selectedItem.notes.length > 0 && (
            <ul
              className={
                hasHotspots
                  ? styles.notesContainer
                  : styles.notesContainerWithHotspots
              }
            >
              {carousel.selectedItem.notes.map((note, noteIndex) => (
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
          )}
        </div>
      </div>
    </Backdrop>
  );
}
