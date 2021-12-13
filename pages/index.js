import React from 'react'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

const Index = ({ repos, user, year }) => {
  return (
    <div>
      <nav id='menu' className='p-4 border-b-2'>
        <h3 className='float-left ml-56 text-2xl'>Personal</h3>
        <ul>
          <li className='mr-10'><a className='text-dourado' href='/'>Home</a></li>
          <li className='mr-10'><a href='/repositorios'>Repositorio</a></li>
          <li className='mr-10'><a href='/portifolios'>Portifolio</a></li>
          <li className='mr-20 border-2 border-dourado py-2 px-4 rounded-xl'><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 pt-8 mx-auto leading-none w-2/3'>
          <div className='pt-20'>
            <h1 className='text-2xl uppercase pl-14 -mb-2'>Hi! I'm</h1>
            <h1 className='text-dourado text-2xl uppercase font-bold pl-14 -mb-2 dourado'>Moacyr Santana</h1>
            <h2 className='text-2xl pl-14'>Software Engineer</h2>
            <div className='relative border border-dourado rounded-xl px-14 pb-4 pt-10 mt-6'>
              <h3 className='absolute rounded-xl bg-dourado text-white py-2 px-6 top-0 -mt-5 text-xl font-bold uppercase'>Contact me</h3>
              <p>
                <a href='http://www.linkedin.com/in/moacyrsantana' target='_black'>< FaLinkedin className='text-5xl hover:text-dourado inline-block mr-6'/></a>
                <a href='https://github.com/juniorvilasboas' target='_black'>< FaGithub className='text-5xl hover:text-dourado inline-block mr-6'/></a>
                <a href='https://www.youtube.com/channel/UC17gkRYV_f6qZJz6SBC9-lg' target='_black'>< FaYoutube className='text-5xl hover:text-dourado inline-block mr-6'/></a>
                <a href='http://www.linkedin.com/in/moacyrsantana' target='_black'>< FiLink className='text-5xl hover:text-dourado inline-block mr-6'/></a>
                <br />
                <span className='inline-block mt-4'>or drop a line: <a href='mailto:junior.vilasboas@gmail.com' className='hover:text-dourado'>junior.vilasboas@gmail.com</a></span>
              </p>
            </div>
          </div>
          <div className='realtive'>
            <img className='absolute z-10 -ml-20 h-24' src='/images/Bola-natal.png' />
            <img className='absolute ml-20 h-80 z-0' src='/images/back-network.png' />
            <img className='esquerda h-96 pt-4 ml-28' src='/images/foto.png' />
          </div>
        </div>
        <div className='rounded-xl bg-white shadow-lg mx-auto w-4/5 py-12'>
          <h3 className='text-dourado text-3xl text-center'>What I do</h3>
          <p className='text-2xl pt-6 px-16 font-bold'>Fullstack Developer asdlkfjaslkdfjçaslkdfjçslakdfjçsdlk</p>
          <p className='text-2xl pt-6 px-16 font-bold'>Fullstack Developer asdlkfjaslkdfjçaslkdfjçslakdfjçsdlk</p>
        </div>

        <div>
          <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-10 mb-5'>My Education</h3>
          <div className='grid grid-cols-2 bg-white w-4/5 mx-auto leading-none rounded-xl shadow-lg py-6'>
            {[1,2].map( i => (
              <div className='border-dashed border-l px-12'>
                <h4 className='text-dourado text-lg uppercase font-bold'>Master's Degree</h4>
                <p className='text-xl uppercase'>Computer Sience <br />
                <span className='text-lg normal-case font-bold'>UNIFACS - University of Salvador</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='footer-basic mt-10 border-t-2 drop-shadow-[0_10px_3px_rgba(0,0,0,0.25)]'>
        <footer>
            <div className='social'>
              <a href="https://www.instagram.com/moacyr.santana/" target='_blank'><i className='icon ion-social-instagram'></i></a>
              <a href="https://twitter.com/Santana_Sud" target='_blank'><i className='icon ion-social-twitter'></i></a>
              <a href="https://www.facebook.com/junior.vilasboas/" target='_blank'><i className='icon ion-social-facebook'></i></a>
            </div>
            <ul className='list-inline'>
                <li className='list-inline-item inline-block'><a href="/" className='hover:text-dourado'>Home</a></li>
                <li className='list-inline-item inline-block'><a href="/repositorios" className='hover:text-dourado'>Repositorios</a></li>
                <li className='list-inline-item inline-block'><a href="/portifolios" className='hover:text-dourado'>Portifolios</a></li>
                <li className='list-inline-item inline-block'><a href="/contact" className='hover:text-dourado'>Contact</a></li>
            </ul>
            <p className='copyright'>Serveware Sistemas © { year }</p>
        </footer>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  //const { repos, user } = await getUser('juniorvilasboas')

  return {
    props: {
      year: new Date().getFullYear(),
      //repos,
      //user
    }
  }
}

export default Index