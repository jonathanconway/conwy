"use client";

import Image from "next/image";
import { Suspense } from "react";

import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";
import { ImageModal } from "../image-modal";
import { Tooltip } from "../tooltip";

import { IMAGE_CASCADE_SIZE_PX } from "./image-cascade-size";
import * as styles from "./image-cascade.css";
import * as inlineStyles from "./image-cascade.css-inline";
import { ImageCascadeProps } from "./image-cascade.types";
import { useImageCascade } from "./use-image-cascade.hook";

function ImageCascade_(props: ImageCascadeProps) {
  const { images, isUrlAddressable } = props;

  const {
    isCascade,
    items,
    selectedItem,
    openedItem,
    handleNextClick,
    handlePreviousClick,
    handleImageClick,
    handleImageKeyDown,
    handleImageModalCloseClick,
  } = useImageCascade({
    items: images,
    isUrlAddressable,
  });

  if (images.length === 0) {
    return;
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.cascadeContainer}
        style={inlineStyles.cascadeContainer}
      >
        {items?.map((image, imageIndex) => (
          <Tooltip
            key={`image-cascade-item-${image.src}`}
            contents={image.alt ?? image.title ?? `Image #${imageIndex}`}
          >
            <button
              tabIndex={0}
              type="button"
              className={styles.imageContainer}
              style={inlineStyles.imageContainer({
                images,
                imageIndex,
                isSelected: selectedItem === image,
              })}
              onClick={handleImageClick(image)}
              onKeyDown={handleImageKeyDown(image)}
            >
              {isCascade && (
                <span className={styles.imageNumber}>
                  {images.indexOf(image) + 1}
                </span>
              )}

              <div className={styles.imageInner}>
                <Image
                  className={styles.image}
                  src={image.src}
                  alt={image.src}
                  width={IMAGE_CASCADE_SIZE_PX.width}
                  height={IMAGE_CASCADE_SIZE_PX.height}
                />
              </div>
            </button>
          </Tooltip>
        ))}
      </div>

      {selectedItem && (
        <button
          tabIndex={0}
          type="button"
          className={styles.selectedImageContainer}
          onClick={handleImageClick(selectedItem)}
          onKeyDown={handleImageKeyDown(selectedItem)}
        >
          <Image
            className={styles.selectedImage}
            src={selectedItem.src}
            alt={selectedItem.src}
            width={IMAGE_CASCADE_SIZE_PX.width * 2}
            height={IMAGE_CASCADE_SIZE_PX.height * 2}
          />
        </button>
      )}

      {isCascade && (
        <div className={styles.nav}>
          <IconButton
            icon={IconTypes.ArrowChevronLeft}
            tooltip={{ key: "previous", contents: "Previous" }}
            onClick={handlePreviousClick}
          />

          <IconButton
            icon={IconTypes.ArrowChevronRight}
            tooltip={{ key: "next", contents: "Next" }}
            onClick={handleNextClick}
          />
        </div>
      )}

      {openedItem && (
        <ImageModal
          images={props.images}
          defaultImage={openedItem}
          isUrlAddressable={isUrlAddressable}
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
