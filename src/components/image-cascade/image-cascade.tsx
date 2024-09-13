"use client";

import Image from "next/image";
import { useState } from "react";

import { ProjectImage } from "@/framework/client";

import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";
import { ImageModal } from "../image-modal";
import { Tooltip } from "../tooltip";

import { useImageCascade } from "./image-cascade.hooks";
import * as styles from "./image-cascade.styles";
import { ImageCascadeProps } from "./image-cascade.types";

interface ImageCascadeState {
  readonly openImage?: ProjectImage;
}

export function ImageCascade(props: ImageCascadeProps) {
  const { handleNextClick, handlePreviousClick, items } = useImageCascade({
    items: props.images,
  });
  const [state, setState] = useState<ImageCascadeState>({});

  const handleImageModalCloseClick = () => {
    setState({});
  };

  const handleImageClick = (openImage: ProjectImage) => () => {
    setState({ openImage });
  };

  if (props.images?.length === 0) {
    return;
  }

  return (
    <>
      <div className={styles.container}>
        {items?.map((image, imageUrlIndex) => (
          <Tooltip
            key={`image-cascade-item-${image.imageUrl}`}
            contents={image.title ?? `Image #${imageUrlIndex}`}
          >
            <div
              className={styles.imageContainer}
              style={{
                left: `${(100 / (props.images.length * 2)) * (imageUrlIndex + 1)}%`,
                top: `${(100 / (props.images.length * 2)) * (imageUrlIndex + 1)}%`,
                width: `${styles.IMAGE_SIZE_PX.width}px`,
                height: `${styles.IMAGE_SIZE_PX.height}px`,
              }}
              onClick={handleImageClick(image)}
            >
              <Image
                className={styles.image}
                src={image.imageUrl}
                alt={image.imageUrl}
                width={styles.IMAGE_SIZE_PX.width}
                height={styles.IMAGE_SIZE_PX.height}
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
          workImages={props.images}
          defaultSelectedWorkImage={state.openImage}
          onClose={handleImageModalCloseClick}
        />
      )}
    </>
  );
}
