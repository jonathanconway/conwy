"use client";

import { sentenceCase } from "@/framework/client";
import { getUrlFilename } from "@/framework/content/url";

import { CarouselNav } from "../carousel";
import { Image } from "../image";
import { Modal } from "../modal";
import { Stack } from "../stack";
import { Text } from "../text";

import { ImageModalHotspots } from "./image-modal-hotspots";
import { ImageModalNotes } from "./image-modal-notes/image-modal-notes";
import { ImageModalProps } from "./image-modal-props";
import * as styles from "./image-modal.css";
import { useImageModal } from "./use-image-modal.hook";

export function ImageModal(props: ImageModalProps) {
  const { carousel, hasHotspots } = useImageModal(props);

  return (
    <Modal
      title={sentenceCase(getUrlFilename(carousel.selectedItem.src))}
      toolbar={<CarouselNav carousel={carousel} />}
      onClose={props.onClose}
    >
      <div className={styles.imageModalMain}>
        <div className={styles.imageContainer}>
          <Stack>
            <Image
              className={styles.image}
              image={carousel.selectedItem}
              src={carousel.selectedItem.src}
              alt={carousel.selectedItem.alt ?? carousel.selectedItem.src}
            />

            {carousel.selectedItem.title && (
              <Text type="small">▲ {carousel.selectedItem.title}</Text>
            )}
          </Stack>
          <ImageModalHotspots carousel={carousel} />
        </div>

        <ImageModalNotes carousel={carousel} hasHotspots={hasHotspots} />
      </div>
    </Modal>
  );
}
