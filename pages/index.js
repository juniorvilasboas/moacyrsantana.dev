import React from 'react'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <nav id='menu' className='p-4'>
        <h3 className='float-left ml-36'>Personal</h3>
        <ul>
          <li className='mr-10'><a className='text-dourado' href='/'>Home</a></li>
          <li className='mr-10'><a href='/repositorios'>Repositorio</a></li>
          <li className='mr-10'><a href='/portifolios'>Portifolio</a></li>
          <li className='mr-20 border-2 border-dourado py-2 px-4 rounded-xl'><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
      <div className='grid grid-cols-2 pt-8 mx-auto leading-none w-2/3'>
        <div className='pt-20'>
          <h1 className='text-2xl uppercase pl-14 -mb-2'>Hi! I'm</h1>
          <h1 className='text-dourado text-2xl uppercase font-bold pl-14 -mb-2 dourado'>Moacyr Santana</h1>
          <h2 className='text-2xl pl-14'>Software Engineer</h2>
          <div className='relative border border-dourado rounded-xl px-14 pb-4 pt-10 mt-6'>
            <h3 className='absolute rounded-xl bg-dourado text-white py-2 px-6 top-0 -mt-5 text-xl font-bold uppercase'>Contact me</h3>
            <p>
              <a href='http://www.linkedin.com/in/moacyrsantana' target='_black'>< FaLinkedin className='text-5xl inline-block mr-6'/></a>
              <a href='https://github.com/juniorvilasboas' target='_black'>< FaGithub className='text-5xl inline-block mr-6'/></a>
              <a href='https://www.youtube.com/channel/UC17gkRYV_f6qZJz6SBC9-lg' target='_black'>< FaYoutube className='text-5xl inline-block mr-6'/></a>
              <a href='http://www.linkedin.com/in/moacyrsantana' target='_black'>< FiLink className='text-5xl inline-block mr-6'/></a>
              <br />
              <span className='inline-block mt-4'>or drop a line: junior.vilasboas@gmail.com</span>
            </p>
          </div>
        </div>
        <div className='realtive'>
          <img className='absolute ml-20 h-80' src='/images/back-network.png' />
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

      <h2 className='font-bold text-3xl'>Meus repositórios no Github</h2>
      {repos.map(repo => {
        return (
          <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
            <h3 className='font-bold'>{repo.full_name}</h3>
            <p>Language: {repo.language} / Stars: {repo.stargazers_count}</p>
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('juniorvilasboas')

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}

export default Index