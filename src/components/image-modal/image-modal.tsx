"use client";

import { cn } from "@jonathanconway/tailwindjs";
import Image from "next/image";

import { WorkImage } from "@/framework/client";

import { CarouselNav } from "../carousel";
import { Heading } from "../heading";
import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";

import * as styles from "./image-modal.styles";
import { ImageModalClasses, useImageModal } from "./use-image-modal.hook";

interface ImageModalProps {
  readonly workImages: readonly WorkImage[];
  readonly defaultSelectedWorkImage: WorkImage;

  readonly onClose: VoidFunction;
}

export function ImageModal(props: ImageModalProps) {
  const { carousel, hasHotspots, handleBackdropClick } = useImageModal(props);

  return (
    <div
      className={cn(ImageModalClasses.Backdrop, styles.imageModalBackdrop)}
      onClick={handleBackdropClick}
    >
      <div
        className={styles.imageModal}
        style={{
          maxWidth: "80vw",
        }}
      >
        <header className={styles.imageModalHeader}>
          {carousel.selectedItem.title && (
            <Heading level={2} className={styles.imageModalTitle}>
              {carousel.selectedItem.title}
            </Heading>
          )}

          <div className={styles.imageModalButtonsContainer}>
            <CarouselNav carousel={carousel} tabTooltipDescription="Image" />

            <IconButton
              className={styles.imageModalCloseButton}
              icon={IconTypes.Close}
              tooltip={{ contents: "Close" }}
              onClick={props.onClose}
            />
          </div>
        </header>

        <div className={styles.imageModalMain}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={carousel.selectedItem.imageUrl}
              alt={carousel.selectedItem.imageUrl}
              width={600}
              height={400}
            />

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
            <ul className={styles.notesContainer(hasHotspots)}>
              {carousel.selectedItem.notes.map((note, noteIndex) => (
                <li key={note.text} className={styles.noteText(hasHotspots)}>
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
    </div>
  );
}
