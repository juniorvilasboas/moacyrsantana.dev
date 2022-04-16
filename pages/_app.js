import React from 'react'
import App from 'next/app'
import '../css/styles.css'
import Layout from '../components/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');
            @import url('https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css');
          `}
        </style>
        <script src='/assets/jquery/jquery-3.4.1.min.js'></script>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}

export default MyApp
