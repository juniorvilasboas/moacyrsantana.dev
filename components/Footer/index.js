import React from 'react'
import Link from './Link'
import Social from './Social'

const Footer = ({ year }) => {
  return (
    <div className='footer-basic mt-10 border-t-2 drop-shadow-[0_10px_3px_rgba(0,0,0,0.25)]'>
      <footer>
          <Social />
          {/*<Link />*/}
          <p className='copyright'>Serveware Sistemas © { year }</p>
      </footer>
    </div>
  )
}

export default Footer