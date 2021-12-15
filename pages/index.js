import React from 'react'
import getUser from '../utils/getUser'
import PageHead from '../components/PageHead'
import Nav from '../components/Nav'
import { FaLinkedin, FaGithub, FaYoutube, FaStar } from 'react-icons/fa';
import { FiLink, FiUsers } from 'react-icons/fi';
import { GoGist, GoRepo } from 'react-icons/go';
import { SiJavascript, SiHtml5, SiNodedotjs, SiReact, SiCss3 } from 'react-icons/si';
import Footer from '../components/Footer';
import Portfolio from '../components/portfolio';

const Index = ({ repos, user, month }) => {
  return (
    <div id='home'>
      <PageHead />
      {/*<Nav />*/}
      <div className='container mx-auto'>
        <div className='md:grid md:grid-cols-2 pt-8 mx-auto leading-none w-10/12 md:w-2/3'>
          <div className='md:pt-20'>
            <h1 className='text-2xl uppercase pl-10 md:pl-14 -mb-2'>Hi! I'm</h1>
            <h1 className='text-dourado text-2xl uppercase font-bold pl-10 md:pl-14 -mb-2 dourado'>Moacyr Santana</h1>
            <h2 className='text-2xl pl-10 md:pl-14'>Software Engineer</h2>
            <div className='relative border border-dourado rounded-xl px-10 md:px-14 pb-4 pt-10 mt-8 md:mt-6'>
              <h3 className='absolute rounded-xl bg-dourado text-white py-2 px-4 md:px-6 top-0 -mt-5 text-lg md:text-xl font-bold uppercase'>Contact me</h3>
              <p>
                <a href='http://www.linkedin.com/in/moacyrsantana' target='_black'>< FaLinkedin className='text-4xl md:text-5xl hover:text-dourado inline-block mr-6'/></a>
                <a href='https://github.com/juniorvilasboas' target='_black'>< FaGithub className='text-4xl md:text-5xl hover:text-dourado inline-block mr-6'/></a>
                <a href='https://www.youtube.com/channel/UC17gkRYV_f6qZJz6SBC9-lg' target='_black'>< FaYoutube className='text-4xl md:text-5xl hover:text-dourado inline-block mr-6'/></a>
                <a href='http://www.linkedin.com/in/moacyrsantana' target='_black'>< FiLink className='text-4xl md:text-5xl hover:text-dourado inline-block mr-6'/></a>
                <br />
                <span className='inline-block mt-4'>or drop a line: <a href='mailto:junior.vilasboas@gmail.com' className='hover:text-dourado'>junior.vilasboas@gmail.com</a></span>
              </p>
            </div>
          </div>
          <div className='realtive'>
            { (month + 1) > 11 &&
              <img className='absolute z-10 md:-ml-20 h-12 md:h-24' src='/images/Bola-natal.png' />
            }
            <img className='absolute h-64 ml-12 md:ml-20 md:h-80 z-0' src='/images/back-network.png' />
            <img className='esquerda h-80 mx-auto md:h-96 mt-12 md:mt-2 pt-4 md:ml-28' src='/images/foto.png' />
          </div>
        </div>
        <div className='rounded-xl bg-white shadow-lg mx-auto w-4/5 py-12'>
          <h3 className='text-dourado text-3xl text-center mb-8'>What I do</h3>
          <div className='md:grid md:grid-cols-2 bg-white w-4/5 mx-auto'>
            <div className='relative border-2 rounded-xl shadow-lg px-8 md:px-14 pb-4 pt-10 mt-6'>
              <h3 className='absolute text-xl py-1 px-6 top-0 -mt-6 bg-white border-2 inline-block rounded-xl font-bold'>Techs</h3>
              <p className='grid grid-cols-4'>
                <a href='https://www.javascript.com/' target='_blank' className='mb-4'><SiJavascript className='text-3xl hover:text-dourado inline-block' /></a>
                <a href='https://reactjs.org/' target='_blank' className='mb-4'><SiReact className='text-3xl hover:text-dourado inline-block mr-6' /></a>
                <a href='https://nodejs.org/' target='_blank' className='mb-4'><SiNodedotjs className='text-3xl hover:text-dourado inline-block mr-6' /></a>
                <a href='https://github.com' target='_blank' className='mb-4'><FaGithub className='text-3xl hover:text-dourado inline-block mr-6' /></a>
                <a href='#' target='_blank' className='mb-4'><SiHtml5 className='text-3xl hover:text-dourado inline-block mr-6' /></a>
                <a href='#' target='_blank' className='mb-4'><SiCss3 className='text-3xl hover:text-dourado inline-block mr-6' /></a>
              </p>
            </div>
            <div>
              <p className='text-2xl pt-6 px-4 md:px-16 font-bold'>Fullstack Developer</p>
              <p className='text-2xl pt-6 px-4 md:px-16 font-bold'>Fullstack Developer</p>
            </div>
          </div>
        </div>

        <div id='education'>
          <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-16 mb-5'>My Education</h3>
          <div className='md:grid md:grid-cols-2 bg-white w-4/5 mx-auto leading-none rounded-xl shadow-lg py-4'>
            <div className='border-dashed px-12 mb-8 md:my-4'>
              <h4 className='text-dourado text-lg uppercase font-bold'>University graduate</h4>
              <p className='text-xl uppercase'>Computer Sience <br />
              <span className='text-lg normal-case font-bold hover:underline'><a href='https://www.unifacs.br/' target='_blank'>UNIFACS - University of Salvador</a></span></p>
            </div>
            <div className='border-dashed border-t md:border-t-0 md:border-l px-12 pt-6 md:pt-0 my-4'>
              <h4 className='text-dourado text-lg uppercase font-bold'>Cursos</h4>
              <p className='text-xl uppercase'>Fullstack Master <br />
              <span className='text-lg normal-case font-bold hover:underline'><a href='https://devpleno.com/' target='_blank'>DevPleno</a></span></p>
            </div>
          </div>
        </div>

        {/** Repositorios */}
        <div id='repos'>
          <h3 className='text-dourado text-2xl font-bold text-center uppercase mt-16'>Github Repositories</h3>
          <p className='text-center mb-5'>Github stats: <GoRepo className='inline-block' /> {user.public_repos} / <GoGist className='inline-block' /> {user.public_gists} / <FiUsers className='inline-block' /> {user.followers}</p>
          <div className='md:grid md:grid-cols-3 bg-white w-4/5 mx-auto leading-none shadow-lg rounded-xl py-6'>
            {repos.map(repo => {
              return (
                <div className='rounded-xl'>
                  <div key={repo.id} className='rounded-xl bg-gray-200 mx-4 my-2 p-4 hover:shadow-md'>
                    <h3 className='font-bold hover:underline capitalize'><a href={'http://github.com/'+repo.usuario+'/'+repo.name} target='_blank'>{repo.name}</a></h3>
                    <p>Language: {repo.language} / <FaStar className='inline-block' />Stars: {repo.stargazers_count}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Portfolio />
      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('juniorvilasboas')

  return {
    props: {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      repos,
      user
    }
  }
}

export default Index