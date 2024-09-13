"use client";

import Image from "next/image";
import { useState } from "react";

import { ProjectImage, WorkMeta } from "@/framework/client";

import { workImageFullPath } from "../work-image-cascade/work-image-cascade.utils";

import * as styles from "./work-images-switcher.styles";

interface WorkImagesSwitcherProps {
  readonly work: WorkMeta;
}

interface WorkImagesSwitcherState {
  readonly selectedWorkImage?: ProjectImage;
}

export function WorkImagesSwitcher(props: WorkImagesSwitcherProps) {
  const [state, setState] = useState<WorkImagesSwitcherState>({
    selectedWorkImage: props.work.images[0],
  });

  const handleImageThumbnailClick = (workImage: ProjectImage) => () => {
    setState({
      selectedWorkImage: workImage,
    });
  };

  return (
    <div className={styles.container}>
      <nav className={styles.imagesNav}>
        {props.work.images.map((workImage, workImageIndex) => (
          <div
            key={`work-image-${workImageIndex}`}
            className={styles.imagesNavItem(
              workImage === state.selectedWorkImage,
            )}
          >
            <Image
              className={styles.imagesNavItemImage}
              onClick={handleImageThumbnailClick(workImage)}
              src={workImageFullPath(props.work)(workImage)}
              alt={workImage.title ?? `Image ${workImageIndex + 1}`}
              priority
              unoptimized={true}
              width={190}
              height={64}
            />
          </div>
        ))}
      </nav>

      {state.selectedWorkImage && (
        <Image
          className={styles.selectedItemImage}
          src={workImageFullPath(props.work)(state.selectedWorkImage)}
          alt={
            state.selectedWorkImage.title ??
            `Image ${props.work.images.indexOf(state.selectedWorkImage) + 1}`
          }
          priority
          unoptimized={true}
          width={768}
          height={480}
        />
      )}
    </div>
  );
}
