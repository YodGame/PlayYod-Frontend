import '@/styles/globals.css'
import '@/styles/country.css'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "react-datepicker/dist/react-datepicker.css";
import { wrapper } from "@/redux/store";

config.autoAddCss = false;

import Head from 'next/head';
import {Provider} from "react-redux";

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
      <>
        <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
        </Head>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
      </>
  )
}

export default App;
