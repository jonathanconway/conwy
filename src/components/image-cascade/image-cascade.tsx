"use client";

import Image from "next/image";
import { useState } from "react";

import { Image as Image_ } from "@/framework/client";

import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";
import { ImageModal } from "../image-modal";
import { Tooltip } from "../tooltip";

import * as styles from "./image-cascade.css";
import { useImageCascade } from "./image-cascade.hooks";
import { ImageCascadeProps } from "./image-cascade.types";

const IMAGE_SIZE_PX = {
  width: 150,
  height: 100,
};

interface ImageCascadeState {
  readonly openImage?: Image_;
}

export function ImageCascade(props: ImageCascadeProps) {
  const { handleNextClick, handlePreviousClick, items, selectedItem } =
    useImageCascade({
      items: props.images,
    });

  const [state, setState] = useState<ImageCascadeState>({});

  const handleImageModalCloseClick = () => {
    setState({});
  };

  const handleImageClick = (openImage: Image_) => () => {
    setState({ openImage });
  };

  if (props.images.length === 0) {
    return;
  }

  if (props.images.length === 1) {
    const image = props.images[0];
    return (
      <Image
        className={styles.image}
        src={image.src}
        alt={image.src}
        width={IMAGE_SIZE_PX.width}
        height={IMAGE_SIZE_PX.height}
      />
    );
  }

  return (
    <>
      <div className={styles.container}>
        {items?.map((image, imageIndex) => (
          <Tooltip
            key={`image-cascade-item-${image.src}`}
            contents={image.alt ?? `Image #${imageIndex}`}
          >
            <div
              className={styles.imageContainer}
              style={{
                left: `${(100 / (props.images.length * 2)) * (imageIndex + 1)}%`,
                top: `${(100 / (props.images.length * 2)) * (imageIndex + 1)}%`,
                width: `${IMAGE_SIZE_PX.width}px`,
                height: `${IMAGE_SIZE_PX.height}px`,
              }}
              onClick={handleImageClick(image)}
            >
              <span className={styles.imageNumber}>
                {props.images.indexOf(image) + 1}
              </span>
              <Image
                className={styles.image}
                src={image.src}
                alt={image.src}
                width={IMAGE_SIZE_PX.width}
                height={IMAGE_SIZE_PX.height}
              />
            </div>
          </Tooltip>
        ))}
      </div>

      {props.images?.length > 1 && (
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

      {state.openImage && (
        <ImageModal
          images={props.images}
          defaultImage={state.openImage}
          onClose={handleImageModalCloseClick}
        />
      )}
    </>
  );
}
