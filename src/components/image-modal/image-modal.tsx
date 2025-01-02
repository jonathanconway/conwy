"use client";

import { Image as Image_, cn } from "@/framework/client";

import { Backdrop } from "../backdrop";
import { CarouselNav } from "../carousel";
import { CarouselBody } from "../carousel/carousel-body";
import { Heading } from "../heading";
import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";
import { Image } from "../image";
import { Link } from "../link";

import * as styles from "./image-modal.css";
import { useImageModal } from "./use-image-modal.hook";

interface ImageModalProps {
  readonly images: readonly Image_[];
  readonly defaultImage: Image_;

  readonly onClose: VoidFunction;
}

// todo: break down

export function ImageModal(props: ImageModalProps) {
  const { carousel, hasHotspots, handleBackdropClick } = useImageModal(props);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <div className={styles.imageModal}>
        <header className={styles.imageModalHeader}>
          {carousel.selectedItem.alt && (
            <Heading level={2} className={styles.imageModalTitle}>
              {carousel.selectedItem.alt}
            </Heading>
          )}

          <div className={styles.imageModalButtonsContainer}>
            <CarouselNav carousel={carousel} />

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
            </Link>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}
