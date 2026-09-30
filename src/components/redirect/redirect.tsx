"use client";

import { useEffect } from "react";

import { Url } from "@/framework";

interface RedirectProps {
  readonly redirectUrl: Url;
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
  return <></>;
}
