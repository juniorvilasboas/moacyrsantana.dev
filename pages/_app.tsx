import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'

import LayoutPublic from 'components/Layout/LayoutPublic'
import LayoutEmpty from 'components/Layout/LayoutEmpty'
import LayoutPanel from 'components/Layout/LayoutPanel'
import LayoutLogin from 'components/Layout/LayoutLogin'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter()
  const { pathname } = router
  console.log(pathname)
  let Layout = LayoutPublic

  if (pathname.indexOf('/404') === 0) {
    Layout = LayoutEmpty
  }
  if (pathname.indexOf('/panel') === 0) {
    Layout = LayoutPanel
  }
  if (pathname.indexOf('/auth') === 0) {
    Layout = LayoutLogin
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <React.Fragment>
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');
            @import url('https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css');
          `}
        </style>
        {/* <Script src='/assets/jquery/jquery-3.4.1.min.js'></Script>
      <Script src='./TW-ELEMENTS-PATH/dist/js/index.min.js'></Script> */}
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </React.Fragment>
    </div>
  )
}

export default MyApp
