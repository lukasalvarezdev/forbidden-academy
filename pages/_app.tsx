import '../styles/globals.css'

interface MyAppProps {
  Component: React.FC
  pageProps: any
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
