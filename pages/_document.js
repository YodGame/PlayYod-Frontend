import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="stylesheet" href="/css/style.min.css"></link>
          <link rel="stylesheet" href="/css/vendors/simplebar.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
