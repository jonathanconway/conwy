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
      {/* <!-- Google Tag Manager --> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSBT4XB');`,
        }}
      ></script>
      {/* <!-- End Google Tag Manager --> */}

      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25G3CM3VLS"
      ></script>
      {/* <!-- End Google tag (gtag.js) --> */}
    </>
  );
}
