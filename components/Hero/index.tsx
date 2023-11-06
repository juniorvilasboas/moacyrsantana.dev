import Image from 'components/Image/image'
import ContactMe from './ContactMe'

const Hero = () => {
  const month = new Date().getMonth()
  return (
    <div className='md:grid md:grid-cols-2 pt-8 mx-auto leading-none'>
      <div className='sm:pt-10 lg:pt-20 md:px-8'>
        <h1 className='text-xl md:text-2xl uppercase pl-10 md:pl-14 -mb-2'>
          Hi! I`m
        </h1>
        <h1 className='text-dourado text-xl md:text-2xl uppercase font-bold pl-10 md:pl-14 -mb-2 dourado'>
          Moacyr Santana
        </h1>
        <h2 className='text-xl md:text-2xl pl-10 md:pl-14'>
          Software Engineer
        </h2>
        <ContactMe />
      </div>
      <div className='realtive'>
        {month + 1 > 11 && (
          <div>
            <Image
              src='/images/Bola-natal.png'
              alt='bola_natal'
              css='absolute z-10 -ml-4 md:-ml-20 h-16 w-16 md:h-20 md:w-20 animate-bounce'
            />
          </div>
        )}
        <Image
          src='/images/reactjs.png'
          alt='react'
          css='absolute z-10 h-16 w-16 ml-2 md:ml-0 lg:ml-8 mt-32 lg:mt-36 animate-bounce'
        />
        <Image
          src='/images/nodejs.png'
          alt='nodejs'
          css='absolute z-10 h-16 w-16 ml-64 sm:ml-72 lg:ml-80 mt-14 lg:mt-12 animate-bounce'
        />
        <Image
          src='/images/javascript.png'
          alt='javascript'
          css='absolute z-10 h-16 w-16 ml-80 sm:ml-80 lg:ml-96 mt-52 lg:mt-60 animate-bounce'
        />
        <Image
          src='/images/back-network.png'
          alt='network'
          priority
          css='absolute w-auto h-64 lg:h-80 md:h-40 ml-12 sm:ml-16 md:ml-0 lg:ml-20 -z-10'
        />
        <Image
          src='/images/foto.png'
          alt='foto'
          css='esquerda mx-auto h-80 w-80 lg:h-96 lg:w-96 mt-12 md:mt-2 pt-4 sm:ml-8 lg:ml-16'
        />
      </div>
    </div>
  )
}

export default Hero
