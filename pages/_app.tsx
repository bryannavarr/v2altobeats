import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "@/styles/Loading.css";
import TagManager from "react-gtm-module";
import * as ga from "../lib/ga";
import { useRouter } from "next/router";
import Script from "next/script";

declare global {
  interface Window {
    gtag: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "AW-11146390891",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LTCERRL7Y4"
      />
        
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LTCERRL7Y4', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
