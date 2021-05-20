import '../styles/styles.scss'
import { HBOProvider } from '../components/HBOProvider' 

function MyApp({ Component, pageProps }) {
  return (
  <HBOProvider>
    <Component {...pageProps} />
  </HBOProvider>
  )
}

export default MyApp
