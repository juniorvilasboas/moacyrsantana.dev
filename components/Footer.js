import React from 'react'

const Footer = ({ year }) => {
  return (
    <div className='footer-basic mt-10 border-t-2 drop-shadow-[0_10px_3px_rgba(0,0,0,0.25)]'>
      <footer>
          <div className='social'>
            <a href="https://www.instagram.com/moacyr.santana/" target='_blank'><i className='icon ion-social-instagram'></i></a>
            <a href="https://twitter.com/Santana_Sud" target='_blank'><i className='icon ion-social-twitter'></i></a>
            <a href="https://www.facebook.com/junior.vilasboas/" target='_blank'><i className='icon ion-social-facebook'></i></a>
          </div>
          <ul className='list-inline'>
              <li className='list-inline-item inline-block'><a href="#home" className='text-sm md:text-lg hover:text-dourado'>Home</a></li>
              <li className='list-inline-item inline-block'><a href="#education" className='text-sm md:text-lg hover:text-dourado'>My Education</a></li>
              <li className='list-inline-item inline-block'><a href="#repos" className='text-sm md:text-lg hover:text-dourado'>Repositories</a></li>
              <li className='list-inline-item inline-block'><a href="#port" className='text-sm md:text-lg hover:text-dourado'>Portfolios</a></li>
          </ul>
          <p className='copyright'>Serveware Sistemas © { year }</p>
      </footer>
    </div>
  )
}

export default Footer