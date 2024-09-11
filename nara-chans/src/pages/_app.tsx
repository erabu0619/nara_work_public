import { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'
import { Footer } from '@/component/Footer'
import { Header } from '@/component/Header'
import Script from "next/script";
import * as gtag from "@/lib/gtag";
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Seohead } from '@/component/Seohead'

const App = ({ Component, pageProps }: AppProps) => {

  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
        }}
      />
      <div className="container">
        <Header />
        <main>
          <div>
            <div className="main_icon"></div>
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App