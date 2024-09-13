"use client";

import { useEffect } from "react";

interface RedirectProps {
  readonly redirectUrl: string;
}

export function Redirect(props: RedirectProps) {
  useEffect(() => {
    setTimeout(() => {
      if (!window?.location) {
        return;
      }
      window.location.href = props.redirectUrl;
    }, 1000);
  });
  return <></>
}
