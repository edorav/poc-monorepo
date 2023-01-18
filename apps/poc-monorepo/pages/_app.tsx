import { AppProps } from 'next/app';
import Head from 'next/head';
import CustomButton from '@poc-monorepo/ui'
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to poc-monorepo!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <CustomButton />
      </main>
    </>
  );
}

export default CustomApp;
