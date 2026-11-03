"use client";

import { MouseEvent, MouseEventHandler, useState } from "react";

interface UseImageFigureParams {
  readonly onClick?: MouseEventHandler;
}

interface UseImageFigureResult {
  readonly handleImageLinkClick: MouseEventHandler;
  readonly onModalClose: VoidFunction;
  readonly isModalOpen: boolean;
}

export function useImageFigure(
  params: UseImageFigureParams,
): UseImageFigureResult {
  const { onClick } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const handleImageLinkClick = (event: MouseEvent) => {
    event.preventDefault();

    if (onClick) {
      onClick(event);
      return;
    }

    onModalOpen();
  };

  return {
    handleImageLinkClick,
    onModalClose,
    isModalOpen,
  };
}
