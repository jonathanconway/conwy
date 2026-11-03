"use client";

import { getUrlFilename, sentenceCase } from "@/framework";

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

  const { title, alt, src } = carousel.selectedItem;

  return (
    <Modal
      className={styles.imageModal}
      title={title ?? alt ?? sentenceCase(getUrlFilename(src))}
      toolbar={<CarouselNav carousel={carousel} />}
      triggerRef={props.triggerRef}
      onClose={props.onClose}
    >
      <div className={styles.imageModalMain}>
        <div className={styles.imageContainer}>
          <div className={styles.imageContainerInner}>
            <Stack>
              <Image
                className={styles.image}
                image={carousel.selectedItem}
                src={src}
                alt={alt ?? src}
                style={{
                  maxHeight: "80vh",
                  height: "100%",
                  width: "100%",
                }}
              />

              {alt && title && <Text type="small">▲ {alt}</Text>}
            </Stack>

            <ImageModalHotspots carousel={carousel} />
          </div>
        </div>

        <ImageModalNotes carousel={carousel} hasHotspots={hasHotspots} />
      </div>
    </Modal>
  );
}
