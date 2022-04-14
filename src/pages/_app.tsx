import type { AppProps } from 'next/app'
import NextHead from 'next/head'

import { globalStyles } from '../styles/globals'
import '../styles/fonts.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  globalStyles()

  return (
    <>
      <NextHead>
        <link
          rel='preload'
          href='/fonts/Inter-Regular.otf'
          as='font'
          type='font/otf'
          crossOrigin='anonymous'
        />
      </NextHead>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
