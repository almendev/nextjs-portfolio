import NavBar from '@/components/NavBar'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

const monserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${monserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default App
