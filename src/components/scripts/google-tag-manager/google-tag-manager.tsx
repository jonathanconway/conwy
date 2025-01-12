"use client";

import { useEffect } from "react";

export function GoogleTagManager() {
  useEffect(() => {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    function gtag(...args: any) {
      w.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-25G3CM3VLS");
  }, []);

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25G3CM3VLS"
      ></script>
    </>
  );
}
