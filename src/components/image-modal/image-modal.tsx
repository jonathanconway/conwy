"use client";

import { CarouselNav } from "../carousel";
import { Image } from "../image";
import { Link } from "../link";
import { Modal } from "../modal";

import { ImageModalHotspots } from "./image-modal-hotspots";
import { ImageModalNotes } from "./image-modal-notes/image-modal-notes";
import { ImageModalProps } from "./image-modal-props";
import * as styles from "./image-modal.css";
import { useImageModal } from "./use-image-modal.hook";

export function ImageModal(props: ImageModalProps) {
  const { carousel, hasHotspots } = useImageModal(props);

  return (
    <Modal
      title={carousel.selectedItem.alt}
      toolbar={<CarouselNav carousel={carousel} />}
      onClose={props.onClose}
    >
      <div className={styles.imageModalMain}>
        <div className={styles.imageContainer}>
          <Link
            href={carousel.selectedItem.src}
            target="_blank"
            showOpenInNew={false}
          >
            <Image
              image={carousel.selectedItem}
              className={styles.image}
              src={carousel.selectedItem.src}
              alt={carousel.selectedItem.alt ?? carousel.selectedItem.src}
            />
            <ImageModalHotspots carousel={carousel} />
          </Link>
        </div>

        <ImageModalNotes carousel={carousel} hasHotspots={hasHotspots} />
      </div>
    </Modal>
  );
}
