import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/globals.css'

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
