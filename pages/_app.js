import '@/styles/globals.css'
import '@/styles/country.css'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { wrapper } from "@/redux/store";
import { setAuthState, setNameState, setUsernameState } from "@/redux/slice/authSlice";
import axios from "axios";

config.autoAddCss = false;

import Head from 'next/head';
import {Provider} from "react-redux";
import {useEffect} from "react";
import { Roboto } from '@next/font/google';

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  useEffect(() => {
      if (typeof window !== "undefined") {
          if (!store.getState().auth.authState) {
              axios.get("/api/validate").then(r => {
                  let data = r.data;
                  if (data?.user) {
                      store.dispatch(setAuthState(true));
                      store.dispatch(setNameState(data.user.full_name));
                      store.dispatch(setUsernameState(data.user.username));
                  }
              });
          }
      }
  }, [])

  return (
      <>
        <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
        </Head>
          <style jsx global>{`
            body {
              font-family: ${roboto.style.fontFamily};
            }
          `}</style>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
      </>
  )
}

export default App;
