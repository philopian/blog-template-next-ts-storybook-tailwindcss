import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Welcome to my blog">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
