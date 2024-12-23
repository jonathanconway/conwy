"use client";

import { ReactNode, useId, useRef } from "react";
import { TooltipRefProps } from "react-tooltip";

import { querySelector } from "@/framework/client";

import { useTooltipNotification } from "./tooltip-notification";

interface UseTooltipParams {
  readonly contents: ReactNode;
}

export function useTooltip(params: UseTooltipParams) {
  const targetId = useId().replaceAll(":", "");

  const targetRef = useRef<TooltipRefProps>(null);

  const targetElement = querySelector(`#${targetId}`);

  const { notificationContents, showNotification } = useTooltipNotification({
    targetRef,
    targetElement,
  });

  const contents = notificationContents ?? params.contents;

  return {
    contents,
    targetId,
    targetRef,
    showNotification,
  };
}
