import type { AppProps } from 'next/app'
import '../css/antd.less'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp