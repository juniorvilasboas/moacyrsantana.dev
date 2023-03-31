import '../styles/globals.css'
import LayoutPublic from 'components/Layout/LayoutPublic'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React from 'react'
import LayoutEmpty from 'components/Layout/LayoutEmpty'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter()
  const { pathname } = router
  let Layout = LayoutEmpty
  if (pathname.indexOf('/panel') === 0) {
    return <Component {...pageProps} />
  }
  if (pathname.indexOf('/site') === 0) {
    Layout = LayoutPublic
  }

  return (
    <React.Fragment>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');
          @import url('https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css');
        `}
      </style>
      <Script src='/assets/jquery/jquery-3.4.1.min.js'></Script>
      <Script src='./TW-ELEMENTS-PATH/dist/js/index.min.js'></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

export default MyApp
