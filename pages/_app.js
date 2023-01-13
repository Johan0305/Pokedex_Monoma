import "../styles/global.scss";

import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
import localStorage from "local-storage";
import { useRouter } from "next/router";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Head>
          <link rel="shortcut icon" href="/assets/pokeball.png" />
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  );
}
