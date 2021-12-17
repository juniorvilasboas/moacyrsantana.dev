import React from 'react'
import Link from './Link'
import Social from './Social'

const Footer = ({ year }) => {
  return (
    <div className='py-10 mt-10 border-t-2 drop-shadow-[0_10px_3px_rgba(0,0,0,0.25)]'>
      <footer>
          <div className='text-center mb-6 px-2'>
            <p className='text-sm md:text-base'>This website was built during Fullstack Master classes. We used NextJS + SSR (Server Side Rendering) + Vercel (as platform)</p>
            <p className='text-sm md:text-base'>You can find the source-code of this website at:</p>
            <a className='text-sm md:text-base hover:underline' href='https://github.com/juniorvilasboas/moacyrsantana.dev' target='_blank'>https://github.com/juniorvilasboas/moacyrsantana.dev</a>
          </div>
          <Social />
          {/** <Link /> */}
          <p className='text-center text-sm mt-3.5'>Serveware Sistemas © { year }</p>
      </footer>
    </div>
  )
}

export default Footer