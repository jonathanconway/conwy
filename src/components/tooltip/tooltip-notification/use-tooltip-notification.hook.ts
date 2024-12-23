"use client";

import { ReactNode, RefObject, useEffect, useState } from "react";
import { TooltipRefProps } from "react-tooltip";

import { Maybe } from "@/framework";

interface UseTooltipNotificationParams {
  readonly targetRef: RefObject<TooltipRefProps>;
  readonly targetElement?: Maybe<Element>;
}

export function useTooltipNotification(params: UseTooltipNotificationParams) {
  const [notificationContents, setNotificationContents] =
    useState<ReactNode>(null);

  function showNotification(contents: ReactNode) {
    setNotificationContents(contents);

    params.targetRef.current?.open();

    setTimeout(() => {
      params.targetRef.current?.close();
      setNotificationContents(null);
    }, 3000);
  }

  useEffect(() => {
    const listener = () => {
      params.targetRef.current?.close();
      setNotificationContents(null);
    };

    params.targetElement?.addEventListener("mouseleave", listener);

    return () => {
      params.targetElement?.removeEventListener?.("mouseleave", listener);
    };
  });

  return {
    notificationContents,
    showNotification,
  };
}
