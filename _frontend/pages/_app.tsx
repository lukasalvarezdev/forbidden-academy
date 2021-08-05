import { AppProps } from 'next/app'
import 'styles/variables.css'
import 'styles/globals.css'
import 'styles/resets.css'
import 'styles/lib.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
