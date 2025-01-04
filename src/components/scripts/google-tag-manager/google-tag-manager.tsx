import Head from "next/head";

export function GoogleTagManager() {
  return (
    <Head key="gtm">
      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25G3CM3VLS"
      ></script>
      <script>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', 'G-25G3CM3VLS');
      `}
      </script>
    </Head>
  );
}
