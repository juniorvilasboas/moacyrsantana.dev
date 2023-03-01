import Social from './Social'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='py-10 mt-10 border-t-2 drop-shadow-[0_10px_3px_rgba(0,0,0,0.25)]'>
      <footer>
        <div className='text-center mb-6 px-2'>
          <p className='text-sm md:text-base'>
            This website was built during Fullstack Master classes. We used
            NextJS + SSR (Server Side Rendering) + Vercel (as platform)
          </p>
          <p className='text-sm md:text-base'>
            You can find the source-code of this website at:
          </p>
          <a
            className='text-sm md:text-base hover:underline'
            href='https://github.com/juniorvilasboas/moacyrsantana.dev'
            target='_blank'
            rel='noreferrer'
          >
            https://github.com/juniorvilasboas/moacyrsantana.dev
          </a>
        </div>
        <Social />
        <p className='text-center text-sm mt-3.5'>
          Serveware Sistemas © 2020 - {year}
        </p>
      </footer>
    </div>
  )
}

export default Footer
