import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className='relative border border-dourado rounded-xl px-10 lg:px-14 pb-4 pt-10 mt-8 lg:mt-6'>
      <h3 className='absolute rounded-xl bg-dourado text-white py-2 px-4 md:px-6 top-0 -mt-5 text-lg md:text-xl font-bold uppercase'>
        Contact me
      </h3>
      <p>
        <Link href='http://www.linkedin.com/in/moacyrsantana' target='_black'>
          <FaLinkedin className='text-4xl lg:text-5xl hover:text-dourado inline-block mr-6 md:mr-4 lg:mr-8' />
        </Link>
        <Link href='https://github.com/juniorvilasboas' target='_black'>
          <FaGithub className='text-4xl lg:text-5xl hover:text-dourado inline-block mr-6 md:mr-4 lg:mr-8' />
        </Link>
        <Link
          href='https://www.youtube.com/channel/UC17gkRYV_f6qZJz6SBC9-lg'
          target='_black'
        >
          <FaYoutube className='text-4xl lg:text-5xl hover:text-dourado inline-block mr-6 md:mr-4 lg:mr-8' />
        </Link>
        <br />
        <span className='inline-block mt-4'>
          or drop a line:{' '}
          <Link
            href='mailto:junior.vilasboas@gmail.com'
            className='hover:text-dourado'
          >
            junior.vilasboas@gmail.com
          </Link>
        </span>
      </p>
    </div>
  )
}

export default ContactMe
