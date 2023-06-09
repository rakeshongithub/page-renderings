import type { AppProps } from 'next/app';
import '@/styles/default.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Demo - Page Rendering Techniques</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
