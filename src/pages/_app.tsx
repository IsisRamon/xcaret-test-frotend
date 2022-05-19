import {useEffect,useState} from "react";
import Head from "next/head";
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import '~/styles/tailwind.css'
import Header from "~/components/header";

import store from "~/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#317EFB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Evaluacion de prueba xcaret"
          key="title"
        />
      </Head>
      
      <Provider store={store}>
        <Header />

        <Component {...pageProps} />
      </Provider>
    </>
  );
  
}
}

export default MyApp
