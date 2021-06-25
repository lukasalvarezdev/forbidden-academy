import '../styles/globals.css'
import '../styles/resets.css'
import '../styles/lib.css'

interface MyAppProps {
  Component: React.FC
  pageProps: any
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
