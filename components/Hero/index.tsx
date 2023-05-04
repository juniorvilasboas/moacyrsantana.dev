import Image from '../Image/image'
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
          <div className='absolute z-10 md:-ml-20 md:h-24'>
            <Image
              src='/images/Bola-natal.png'
              alt='bola_natal'
              h={80}
              w={80}
            />
          </div>
        )}
        <div className='z-10'>
          <div className='absolute z-10 h-16 ml-2 md:ml-0 lg:ml-8 mt-32 lg:mt-36 animate-bounce'>
            <Image src='/images/reactjs.png' alt='react' h={60} w={60} />
          </div>
          <div className='absolute z-10 h-16 ml-56 sm:ml-72 lg:ml-80 mt-14 lg:mt-12 animate-bounce'>
            <Image src='/images/nodejs.png' alt='nodejs' h={60} w={60} />
          </div>
          <div className='absolute z-10 h-16 ml-64 sm:ml-80 lg:ml-96 mt-52 lg:mt-60 animate-bounce'>
            <Image
              src='/images/javascript.png'
              alt='javascript'
              h={60}
              w={60}
            />
          </div>
        </div>
        <div className='absolute w-auto h-64 lg:h-80 md:h-40 ml-12 sm:ml-16 md:ml-0 lg:ml-20 -z-10'>
          <Image
            src='/images/back-network.png'
            alt='network'
            h={400}
            w={400}
            priority
          />
        </div>
        <img
          className='esquerda mx-auto h-80 lg:h-96 mt-12 md:mt-2 pt-4 sm:ml-8 lg:ml-24'
          src='/images/foto.png'
          alt='foto'
        />
      </div>
    </div>
  )
}

export default Hero
