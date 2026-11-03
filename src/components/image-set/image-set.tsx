"use client";

import { useState } from "react";

import { Image as Image_ } from "@/framework";

import { ImageFigure } from "../image-figure";
import { ImageModal } from "../image-modal";
import { LayoutGrid } from "../layouts";

import { ImageSetProps } from "./image-set-props";

export function ImageSet(props: ImageSetProps) {
  const [openedItem, setOpenedItem] = useState<Image_ | undefined>();

  function handleImageClick(image: Image_) {
    return () => setOpenedItem(image);
  }

  function handleImageModalCloseClick() {
    setOpenedItem(undefined);
  }

  return (
    <>
      <LayoutGrid gridWidth={3}>
        {props.images.map((image) => (
          <ImageFigure
            key={image.src}
            image={image}
            onClick={handleImageClick(image)}
          />
        ))}
      </LayoutGrid>

      {openedItem && (
        <ImageModal
          images={props.images}
          defaultImage={openedItem}
          isUrlAddressable
          onClose={handleImageModalCloseClick}
        />
      )}
    </>
  );
}
