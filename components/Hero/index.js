import React from 'react'
import ContactMe from './ContactMe';

const Hero = ({ month }) => {
  return (
    <div className='md:grid md:grid-cols-2 pt-8 mx-auto leading-none w-10/12 md:w-2/3'>
      <div className='md:pt-20'>
        <h1 className='text-2xl uppercase pl-10 md:pl-14 -mb-2'>Hi! I'm</h1>
        <h1 className='text-dourado text-2xl uppercase font-bold pl-10 md:pl-14 -mb-2 dourado'>Moacyr Santana</h1>
        <h2 className='text-2xl pl-10 md:pl-14'>Software Engineer</h2>
        <ContactMe />
      </div>
      <div className='realtive'>
        { (month + 1) > 11 &&
          <img className='absolute z-10 md:-ml-20 h-12 md:h-24' src='/images/Bola-natal.png' />
        }
        <img className='absolute h-64 ml-12 md:ml-20 md:h-80 z-0' src='/images/back-network.png' />
        <img className='esquerda h-80 mx-auto md:h-96 mt-12 md:mt-2 pt-4 md:ml-28' src='/images/foto.png' />
      </div>
    </div>
  )
}

export default Hero