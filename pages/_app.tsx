import Head from 'next/head'

import { ColorThemeProvider } from '../lib/ColorThemeContext'

import '../static/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ColorThemeProvider>
        <Component {...pageProps} />
      </ColorThemeProvider>
    </>
  )
}

export default MyApp
