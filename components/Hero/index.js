import React from 'react'
import ContactMe from './ContactMe';

const Hero = ({ month }) => {
  return (
    <div className='md:grid md:grid-cols-2 pt-8 mx-auto leading-none'>
      <div className='sm:pt-10 lg:pt-20 md:px-8'>
        <h1 className='text-2xl uppercase pl-10 md:pl-14 -mb-2'>Hi! I'm</h1>
        <h1 className='text-dourado text-2xl uppercase font-bold pl-10 md:pl-14 -mb-2 dourado'>Moacyr Santana</h1>
        <h2 className='text-2xl pl-10 md:pl-14'>Software Engineer</h2>
        <ContactMe />
      </div>
      <div className='realtive'>
        { (month + 1) > 11 &&
          <img className='absolute z-10 md:-ml-20 h-12 md:h-24' src='/images/Bola-natal.png' />
        }
        <div className='z-10'>
          <img className='absolute z-10 h-16 ml-2 md:ml-0 lg:ml-8 mt-32 lg:mt-36 animate-bounce' src='/images/reactjs.png' />
          <img className='absolute z-10 h-16 ml-56 md:ml-52 lg:ml-80 mt-14 lg:mt-12 animate-bounce' src='/images/nodejs.png' />
          <img className='absolute z-10 h-16 ml-64 lg:ml-96 mt-52 lg:mt-60 animate-bounce' src='/images/javascript.png' />
        </div>
        <img className='absolute h-64 md:h-72 lg:h-80 md:h-40 ml-12 sm:ml-16 md:ml-0 lg:ml-20 z-0' src='/images/back-network.png' />
        <img className='esquerda mx-auto h-80 lg:h-96 mt-12 md:mt-2 pt-4 sm:ml-8 lg:ml-24' src='/images/foto.png' />
      </div>
    </div>
  )
}

export default Hero