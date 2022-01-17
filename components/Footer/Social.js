import React from 'react'

const Social = () => {
  return (
    <div className='text-center pb-6'>
      <a href="https://www.instagram.com/moacyr.santana/" target='_blank' rel="noreferrer" className='text-base text-3xl text-inherit w-10 h-10 leading-10 inline-block border rounded-3xl mx-2 opacity-75 hover:text-dourado'>
      <i className='ion-social-instagram'></i>
      </a>
      <a href="https://twitter.com/Santana_Sud" target='_blank' rel="noreferrer" className='text-base text-3xl text-inherit w-10 h-10 leading-10 inline-block border rounded-3xl mx-2 opacity-75 hover:text-dourado'>
        <i className='ion-social-twitter'></i>
      </a>
      <a href="https://www.facebook.com/junior.vilasboas/" target='_blank' rel="noreferrer" className='text-base text-3xl text-inherit w-10 h-10 leading-10 inline-block border rounded-3xl mx-2 opacity-75 hover:text-dourado'>
        <i className='ion-social-facebook'></i>
      </a>
    </div>
  )
}

export default Social