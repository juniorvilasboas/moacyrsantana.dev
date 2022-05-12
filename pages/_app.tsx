import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutPublic from 'components/Layout/LayoutPublic'
import LayoutPanel from 'components/Layout/LayoutPanel'
import { useRouter } from 'next/router'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pathname } = router
  let Layout = LayoutPublic
  if (pathname.indexOf('/panel') === 0) {
    Layout = LayoutPanel
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

export default MyApp
