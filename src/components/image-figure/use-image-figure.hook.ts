"use client";

import { MouseEvent, MouseEventHandler, useState } from "react";

interface UseImageFigureResult {
  readonly handleImageLinkClick: MouseEventHandler;
  readonly onModalClose: VoidFunction;
  readonly isModalOpen: boolean;
}

export function useImageFigure(): UseImageFigureResult {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const handleImageLinkClick = (event: MouseEvent) => {
    event.preventDefault();
    onModalOpen();
  };

  return {
    handleImageLinkClick,
    onModalClose,
    isModalOpen,
  };
}
