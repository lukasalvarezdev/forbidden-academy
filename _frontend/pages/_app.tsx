import Head from 'next/head'
import { AppProps } from 'next/app'
import 'styles/variables.css'
import 'styles/globals.css'
import 'styles/resets.css'
import 'styles/lib.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Forbidden Academy - Luki & MateoRH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
