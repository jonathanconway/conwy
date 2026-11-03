"use client";

import { Suspense, useRef } from "react";

import { CarouselNav } from "../carousel";
import { Image } from "../image";
import { ImageModal } from "../image-modal";
import { LayoutCascade, LayoutCentered } from "../layouts";
import { Tooltip } from "../tooltip";

import { ImageCascadeProps } from "./image-cascade-props";
import { IMAGE_CASCADE_IMAGE_SIZE_PX } from "./image-cascade-size";
import * as styles from "./image-cascade.css";
import { useImageCascade } from "./use-image-cascade.hook";

function ImageCascade_(props: ImageCascadeProps) {
  const { images, isUrlAddressable = true } = props;

  const {
    isCascade,
    selectedImage,
    openedImage,
    handleImageModalCloseClick,
    handleSelectedImageClick,
    handleSelectedImageKeyDown,
    carousel,
  } = useImageCascade({
    images,
    isUrlAddressable,
  });

  const selectedImageContainerRef = useRef(null);

  if (images.length === 0) {
    return;
  }

  const children = images?.map((image) => (
    <div
      key={`image-cascade-item-${image.src}`}
      className={styles.imageContainer}
      onClick={carousel.handleTabClick(image)}
    >
      <span className={styles.imageNumber}>{images.indexOf(image) + 1}</span>

      <div className={styles.imageInner}>
        <Image
          image={image}
          className={styles.image}
          width={IMAGE_CASCADE_IMAGE_SIZE_PX.width}
          height={IMAGE_CASCADE_IMAGE_SIZE_PX.height}
        />
      </div>
    </div>
  ));

  return (
    <div className={styles.container}>
      {images.length > 1 && (
        <LayoutCascade
          frontChild={children[images.indexOf(selectedImage)]}
          renderChildWrapper={(child, childIndex) => (
            <Tooltip
              key={`image-cascade-item-${images[childIndex].src}`}
              contents={
                images[childIndex].alt ??
                images[childIndex].title ??
                `Image #${childIndex + 1}`
              }
            >
              {child}
            </Tooltip>
          )}
        >
          {children}
        </LayoutCascade>
      )}

      {selectedImage && (
        <button
          ref={selectedImageContainerRef}
          tabIndex={0}
          type="button"
          className={styles.selectedImageContainer}
          onClick={handleSelectedImageClick(selectedImage)}
          onKeyDown={handleSelectedImageKeyDown(selectedImage)}
        >
          <Image
            className={styles.selectedImage}
            image={selectedImage}
            width={IMAGE_CASCADE_IMAGE_SIZE_PX.width * 2}
            height={IMAGE_CASCADE_IMAGE_SIZE_PX.height * 2}
          />
        </button>
      )}

      <LayoutCentered>
        {isCascade && <CarouselNav carousel={carousel} />}
      </LayoutCentered>

      {openedImage && (
        <ImageModal
          images={props.images}
          defaultImage={openedImage}
          isUrlAddressable={isUrlAddressable}
          triggerRef={selectedImageContainerRef}
          onClose={handleImageModalCloseClick}
        />
      )}
    </div>
  );
}

export function ImageCascade(props: ImageCascadeProps) {
  return (
    <Suspense>
      <ImageCascade_ {...props} />
    </Suspense>
  );
}
